import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../app.state';
import { IAction, IReducer } from '../app.reducers';
import {  IEffect } from '../app.effects';
import { INITIAL_STATE } from './tokens';
import { getNextState } from './utils';
import { LoggerService } from '../core/logger.service';
import * as fromPostcode from '../area';
import { EFFECTS, IEffects } from '../app.effects';
import { UpdateRoutesAction } from '../routing/update-routes';

@Injectable()
export class Store {
  state$: BehaviorSubject<IAppState>; // Todo: generic as not in module?
  action$: BehaviorSubject<IAction>;
  private actionSubscription: Subscription;

  dispatch(action: IAction) {
    this.action$.next(action);
  }

  select<T extends keyof IAppState>(slice: T) {
    return this.state$
      .pluck(slice)
      .distinctUntilChanged() as Observable<IAppState[T]>;
  }

  private effect(
    action: IAction,
    state: IAppState,
    effectFunctions: any,
    injector: Injector,
    logger: LoggerService
  ) {
    Object.keys(state.configuration) // TODO: use Object.entries here
    .filter(sliceName => state.configuration[sliceName].effects !== undefined)
    .forEach(sliceName => {
      const sliceEffects = state.configuration[sliceName].effects;
      Object.keys(sliceEffects) // TODO: use Object.entries here
        .filter(actionName => actionName === action.type)
        .forEach(actionName => {
          const functionName = sliceEffects[actionName];
          const effectFunction = effectFunctions[functionName] as IEffect<any>|undefined;
          if (effectFunction === undefined) {
            throw new Error(`expected effect named '${functionName}'`);
          }
          logger.log(`Effect ${functionName}`);
          effectFunction(action, this, injector);
        });
    });
  }

  constructor(
    @Inject(INITIAL_STATE) private initialState: IAppState|IAppState,
    @Inject(EFFECTS) private effects: IEffects|IEffects, // TODO: remove union
    private injector: Injector,
    private loggerService: LoggerService
  ) {
    this.state$ = new BehaviorSubject(initialState);
    this.action$ = new BehaviorSubject({ type: 'APP_LAUNCH'});

    this.action$
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        this.loggerService.log(`Action ${action.type} ${action.payload || ''}`);

        const [nextState, changeList] = getNextState(action, state);
        if (changeList.length > 0) {
          this.state$.next(nextState);
          if (changeList.indexOf('configuration') > -1) {
            this.action$.next(new UpdateRoutesAction());
          }
        }

        this.effect(action, state, this.effects, this.injector, this.loggerService);
      });
  }
}
