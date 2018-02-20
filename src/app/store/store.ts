import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';
import { Subscription } from 'rxjs/Subscription';
import { State } from './state';
import {  Effect } from '../store/effect';
import { INITIAL_STATE } from './tokens';
import { LoggerService } from '../core/logger.service';
import { EFFECTS, Effects } from '../app.effects';
import { UpdateRoutesAction } from '../routing/update-routes';

import { reduceCoreStateOrNull } from '../core/state';
import { reduceAreaStateOrNull } from '../area/state';
import { reduceRestaurantsStateOrNull } from '../restaurants/state';
import { Actionable } from '../store/actionable';
import { Action } from '../store/action';

@Injectable()
export class Store {
  state$: BehaviorSubject<State>; // Todo: generic as not in module?
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
    @Inject(EFFECTS) private effects: Effects|Effects, // TODO: remove union
    private injector: Injector,
    private loggerService: LoggerService
  ) {
    this.state$ = new BehaviorSubject<State>(initialState);
    this.action$ = new BehaviorSubject<Actionable>({ actionType: Action.initialAction});

    this.action$
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        this.loggerService.log(`Action ${action.actionType}`);

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
      });
  }
}
