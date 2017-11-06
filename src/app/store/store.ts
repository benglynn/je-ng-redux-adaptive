import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
import { IAppState, IAction, IReducer, IReducers, IEffects } from './types';
import { INITIAL_STATE } from './tokens';
import { Registry } from './registry';
import * as fromUtils from './utils';

import * as fromPostcode from '../area';

@Injectable()
export class Store {
  state$: BehaviorSubject<IAppState>;
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
    reducers: IReducers) {
    const sliceNames = Object.keys(state);
    const nextSlices = fromUtils.nextSlices(state, action, reducers);
    const nextState = fromUtils.toMergedObject(sliceNames, state, nextSlices);
    console.log('state', nextState);
    this.state$.next(nextState); // TODO: implement change detection
  }

  private effect(
    action: IAction,
    state: IAppState,
    effectFunctions: IEffects,
    injector: Injector
  ) {
    const slices = state.configuration.effects;
    Object.keys(slices)
      .forEach(sliceName => {
        const effectNameHash = state.configuration.effects[sliceName];
        Object.keys(effectNameHash)
          .filter(actionName => actionName === action.type)
          .map(actionName => {
            const effectFunctionName = effectNameHash[actionName];
            const effectFunction = effectFunctions[effectFunctionName];
            if (effectFunction === undefined) {
              throw new Error(`expected effect named '${effectFunctionName}'`);
            }
            effectFunction(action, injector);
        });
      });
  }

  constructor(
    @Inject(INITIAL_STATE) private initialState: IAppState,
    private registry: Registry,
    private injector: Injector
  ) {
    this.state$ = new BehaviorSubject(initialState);
    this.action$ = new BehaviorSubject({ type: 'INITIAL_ACTION'});

    this.actionSubscription = this.action$ // TODO: manage destruction
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        console.log(action.type, action.payload);
        this.reduce(action, state, this.registry.reducers);
        this.effect(action, state, this.registry.effects, this.injector);
      });
  }
}
