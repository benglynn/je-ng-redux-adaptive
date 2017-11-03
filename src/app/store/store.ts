import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAppStateX, IActionX, IReducerX, IReducersX } from './types';
import { INITIAL_STATE } from './tokens';
import { Registry } from './registry';

import * as fromPostcode from '../postcode';

@Injectable()
export class StoreX {
  state$: BehaviorSubject<IAppStateX>;
  action$: BehaviorSubject<IActionX>;
  private actionSubscription: Subscription;

  dispatch(action: IActionX) {
    this.action$.next(action);
  }

  private nextSlices(state: IAppStateX, action: IActionX, reducers: IReducersX
    ): any[] {
    // TODO: memoize lookup
    return Object.keys(state).map((sliceName): any => {
      const stateSlice = state[sliceName];
      const sliceReducers = state.configuration.reducers[sliceName];
      if (sliceReducers === undefined) {
        return undefined;
      }
      const reducerName = sliceReducers[action.type];
      if (reducerName === undefined) {
        return undefined;
      }
      const reducerFunction = reducers[reducerName];
      if (reducerFunction === undefined) {
        throw new Error(`expected reducer named '${reducerName}'`);
      }
      return reducerFunction(action, stateSlice);
    });
  }

  private toMergedObject(names: string[], oldObject: Object, newValues: any[]) {
    return newValues.reduce(
      (accumulator: Object, current: Object|undefined, index: number) => {
        const name = names[index];
        const slice = {[name]: current || oldObject[name]};
        return Object.assign(accumulator, slice);
      }, {});
  }

  private reduce(action: IActionX, state: IAppStateX) {
    // TODO: is there benefit in folding config into slices?
    const sliceNames = Object.keys(state);
    const nextSlices = this.nextSlices(state, action, this.registry.reducers);
    const nextState = this.toMergedObject(sliceNames, state, nextSlices);
    this.state$.next(nextState); // TODO: implement change detection
  }

  constructor(
    @Inject(INITIAL_STATE) private initialState: IAppStateX,
    private registry: Registry
  ) {
    this.state$ = new BehaviorSubject(initialState);
    this.action$ = new BehaviorSubject({ type: 'INITIAL_ACTION'});

    this.actionSubscription = this.action$ // TODO: manage destruction
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        console.group('dispatched action');
        console.log(action);
        console.groupEnd();
        this.reduce(action, state);
      });
  }
}
