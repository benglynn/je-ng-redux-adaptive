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
import { LoggerService } from '../core/logger.service';
import * as fromPostcode from '../area';
import { EFFECTS, IEffects } from '../app.effects';
import { UpdateRoutesAction } from '../routing/update-routes';

import { reduceCoreStateOrNull } from '../core/state';
import { reduceAreaStateOrNull } from '../area/state';
import { reduceRestaurantsStateOrNull } from '../restaurants/state';
import { Action } from '../store';

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
    this.state$ = new BehaviorSubject<IAppState>(initialState);
    this.action$ = new BehaviorSubject<IAction>({ type: 'APP_LAUNCH', actionType: Action.initialAction});

    this.action$
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        this.loggerService.log(`Action ${action.type} ${action.payload || ''}`);

        const coreStateOrNull = reduceCoreStateOrNull({ ...state.core }, action);
        const areaStateOrNull = reduceAreaStateOrNull({ ...state.area }, action);
        const restaurantsStateOrNull = reduceRestaurantsStateOrNull(
          { ...state.restaurants }, action);
        const isUpdatedState = Boolean(
          coreStateOrNull !== null ||
          areaStateOrNull !== null ||
          restaurantsStateOrNull !== null
        );
        if (isUpdatedState) {
          this.state$.next({
            ...state, // <- TODO remove when config has gone
            core: coreStateOrNull || state.core,
            area: areaStateOrNull || state.area,
            restaurants: restaurantsStateOrNull || state.restaurants,
          });
          this.action$.next(new UpdateRoutesAction());
        }

        this.effect(action, state, this.effects, this.injector, this.loggerService);
      });
  }
}
