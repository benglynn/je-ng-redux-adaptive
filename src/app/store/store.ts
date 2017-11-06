import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
import { IAppStateX, IActionX, IReducerX, IReducersX, IEffectsX } from './types';
import { INITIAL_STATE } from './tokens';
import { Registry } from './registry';
import * as fromUtils from './utils';

import * as fromPostcode from '../postcode';

@Injectable()
export class StoreX {
  state$: BehaviorSubject<IAppStateX>;
  action$: BehaviorSubject<IActionX>;
  private actionSubscription: Subscription;

  dispatch(action: IActionX) {
    this.action$.next(action);
  }

  select<T extends keyof IAppStateX>(slice: T) {
    return this.state$
      .pluck(slice)
      .distinctUntilChanged() as Observable<IAppStateX[T]>;
  }

  private reduce(action: IActionX, state: IAppStateX) {
    // TODO: is there benefit in folding config into slices?
    const sliceNames = Object.keys(state);
    const nextSlices = fromUtils.nextSlices(state, action, this.registry.reducers);
    const nextState = fromUtils.toMergedObject(sliceNames, state, nextSlices);
    console.log('state', nextState);
    this.state$.next(nextState); // TODO: implement change detection
  }

  private effect(
    action: IActionX,
    state: IAppStateX,
    effectFunctions: IEffectsX,
    injector: Injector
  ) {
    const effectNames = state.configuration.effects;
    Object.keys(effectNames)
      .filter(actionName => actionName === action.type)
      .map(actionName => {
        const effectName = effectNames[actionName];
        const effectFunction = effectFunctions[effectName];
        if (effectFunction === undefined) {
          throw new Error(`expected effect named '${effectName}'`);
        }
        effectFunction(action, injector);
    });
  }

  constructor(
    @Inject(INITIAL_STATE) private initialState: IAppStateX,
    private registry: Registry,
    private injector: Injector
  ) {
    this.state$ = new BehaviorSubject(initialState);
    this.action$ = new BehaviorSubject({ type: 'INITIAL_ACTION'});

    this.actionSubscription = this.action$ // TODO: manage destruction
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        console.log(action.type, action.payload);
        this.reduce(action, state);
        this.effect(action, state, this.registry.effects, this.injector);
      });
  }
}
