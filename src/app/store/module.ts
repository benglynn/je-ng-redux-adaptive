import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatmap';

export type InitialStateX = {[name: string]: any};
export type ActionX = { type: string; payload?: any };
export type ReducerX<T> = (action: ActionX, state: T) => T
export const INITIAL_STATE_X = new InjectionToken<InitialStateX>('Initial state X');

import * as fromPostcode from '../postcode';
import * as fromConfiguration from '../configuration';

interface AppState {
  postcode: fromPostcode.State;
  configuration: fromConfiguration.State;
}

@Injectable()
export class StoreX {

  state$: BehaviorSubject<AppState>;
  action$: BehaviorSubject<ActionX>;
  private actionSubscription: Subscription;
  private reducerRegistry: {[name: string]: ReducerX<any>};

  dispatch(action: ActionX) {
    this.action$.next(action);
  }

  private reduce(action: ActionX, state: AppState) {
    const reducerRegistry = this.reducerRegistry; // really? Sort out scope.
    const sliceNames = Object.keys(state);
    const nextSlices = sliceNames
      .map(function(sliceName): any {
        const stateSlice = state[sliceName];
        const sliceReducers = state.configuration.reducers[sliceName];
        return Object.keys(sliceReducers)
          .filter(sliceActionType => sliceActionType === action.type)
          .map(sliceActionType => {
            const reducerName = sliceReducers[sliceActionType];
            const reducer = reducerRegistry[reducerName];
            return reducer ? reducer(action, stateSlice) : stateSlice;
          })[0]
      });
      const nextState = nextSlices.reduce((acc, curr, i) => {
        const sliceName = sliceNames[i];
        const nextSlice = {[sliceName]: curr || state[sliceName]};
        return Object.assign(acc, nextSlice);
      }, {});
      this.state$.next(nextState); // TODO: only when it changes!
  }

  constructor( @Inject(INITIAL_STATE_X) private initialState: AppState) {
    this.state$ = new BehaviorSubject(this.initialState);
    this.action$ = new BehaviorSubject({ type: 'INITIAL_ACTION'});

    // this.dispatch({ type: 'UPDATE_POSTCODE', payload: 'CC34AH'});

    this.reducerRegistry = {
      'updatePostcode': (action: ActionX, state: fromPostcode.State) => {
        return action.payload;
      }
    }

    this.actionSubscription = this.action$ // TODO: manage destruction
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => this.reduce(action, state));
  }
}

@NgModule({})
export class StoreModule {
  static forRoot(initialState: InitialStateX): ModuleWithProviders{
    return {
      ngModule: StoreModule,
      providers: [
        StoreX,
        { provide: INITIAL_STATE_X, useValue: initialState }
      ]
    }
  }
}
