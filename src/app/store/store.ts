import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAppStateX } from './state';
import { INITIAL_STATE } from './tokens';
import { ActionX } from './action';
import { Registry } from './registry';

import * as fromPostcode from '../postcode';

export type ReducerX<T> = (action: ActionX, state: T) => T
type ReducersX = { [name: string]: ReducerX<any> };

@Injectable()
export class StoreX {
  state$: BehaviorSubject<IAppStateX>;
  action$: BehaviorSubject<ActionX>;
  private actionSubscription: Subscription;

  dispatch(action: ActionX) {
    this.action$.next(action);
  }

  private nextSlices(state: IAppStateX, action: ActionX, reducers: ReducersX
    ): any[] {
    // TODO: break this apart, look to memoize reducer search
    return Object.keys(state).map((sliceName): any => {
      const stateSlice = state[sliceName];
      const sliceReducers = state.configuration.reducers[sliceName];
      return Object.keys(sliceReducers)
        .filter(sliceActionType => sliceActionType === action.type)
        .map(sliceActionType => {
          const reducerName = sliceReducers[sliceActionType];
          const reducer = reducers[reducerName];
          if(reducer === undefined) {
            throw new Error(`no reducer named '${reducerName}'`);
          }
          return reducer(action, stateSlice);
        })[0]
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

  private reduce(action: ActionX, state: IAppStateX) {
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
        console.log(action);
        this.reduce(action, state);
      });
  }
}
