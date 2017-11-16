import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../state';
import { IAction, IEffect, IReducer } from './types';
import { ISliceConfiguration } from '../configuration';
import { INITIAL_STATE } from './tokens';
import { Registry } from './registry';
import * as fromUtils from './utils';
import { LoggerService } from '../core/logger.service';
import * as fromPostcode from '../area';
import { REDUCERS, IReducers } from '../app.reducers';
import { EFFECTS, IEffects } from '../app.effects';

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

  private reduce(
    action: IAction,
    state: IAppState,
    reducers: IReducers,
    logger: LoggerService) {
      const newSlices = Object.keys(state) // TODO: use Object.entries here
        .map(sliceName => {
          const sliceConf: ISliceConfiguration|undefined = state
            .configuration[sliceName];
          if (sliceConf === undefined) { return null; }
          const reducersConf = sliceConf.reducers;
          if (reducersConf === undefined) { return null; }
          const reducerName = reducersConf[action.type];
          if (reducerName === undefined) { return null; }
          const reducer: IReducer<any>|undefined = reducers[reducerName];
          if (reducer === undefined ) {
            throw new Error(`no reducer '${reducerName}'`);
          }
          logger.log(`Reducer ${reducerName}`);
          return reducer(action, state[sliceName]);
      });
      const isUnchanged = newSlices.reduce((acc, nextSlice) => {
        return acc === true && nextSlice === null;
      }, true);
      if (isUnchanged === false) {
        this.state$.next(fromUtils.toMergedObject(state, newSlices));
      }
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
    @Inject(INITIAL_STATE) private initialState: IAppState,
    @Inject(REDUCERS) private reducers: IReducers|IReducers, // TODO: remove union
    @Inject(EFFECTS) private effects: IEffects|IEffects, // TODO: remove union
    private registry: Registry,
    private injector: Injector,
    private loggerService: LoggerService
  ) {
    this.state$ = new BehaviorSubject(initialState);
    this.action$ = new BehaviorSubject({ type: 'APP_LAUNCH'});

    this.actionSubscription = this.action$ // TODO: manage destruction
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        this.loggerService.log(`Action ${action.type} ${action.payload || ''}`);
        this.reduce(action, state, this.reducers, this.loggerService);
        this.effect(action, state, this.effects, this.injector, this.loggerService);
      });
  }
}
