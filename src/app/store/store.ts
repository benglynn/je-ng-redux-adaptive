import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';
import { Subscription } from 'rxjs/Subscription';
import { State } from './state';
import {  EffectFunc } from '../store/effect-func';
import { INITIAL_STATE } from './tokens';
import { UpdateRoutesAction } from '../presentation/update-routes';
import { reduceCoreStateOrNull } from '../core/state/reduce-core-state-or-null';
import { reduceAreaStateOrNull } from '../area/state/reduce-area-state-or-null';
import { reduceRestaurantsStateOrNull } from '../restaurants/state/reduce-restaurants-state-or-null';
import { Actionable } from '../store/actionable';
import { Action } from '../store/action';
import { callEffects } from '../core/effects/call-effects';

@Injectable()
export class Store {
  state$: BehaviorSubject<State>;
  action$: BehaviorSubject<Actionable>;
  private actionSubscription: Subscription;

  dispatch(action: Actionable) {
    this.action$.next(action);
  }

  select<T extends keyof State>(slice: T) {
    return this.state$
      .pluck(slice)
      .distinctUntilChanged() as Observable<State[T]>;
  }

  constructor(
    @Inject(INITIAL_STATE) private initialState: State|State,
    private injector: Injector
  ) {
    this.state$ = new BehaviorSubject<State>(initialState);
    this.action$ = new BehaviorSubject<Actionable>({ actionType: Action.initialAction});

    this.action$
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        const coreStateOrNull = reduceCoreStateOrNull({ ...state.core }, action);
        const areaStateOrNull = reduceAreaStateOrNull({ ...state.area }, action);
        const restaurantsStateOrNull = reduceRestaurantsStateOrNull(
          { ...state.restaurants }, action);
        const isUpdatedState = Boolean(
          coreStateOrNull !== null ||
          areaStateOrNull !== null ||
          restaurantsStateOrNull !== null
        );
        const currentOrUpdatedState = isUpdatedState ? <State>{
          core: coreStateOrNull || state.core,
          area: areaStateOrNull || state.area,
          restaurants: restaurantsStateOrNull || state.restaurants,
        } : state;
        if (isUpdatedState) {
          this.state$.next(currentOrUpdatedState);
          this.action$.next(new UpdateRoutesAction());
        }
        callEffects(currentOrUpdatedState, action, this, injector);
      });
  }
}
