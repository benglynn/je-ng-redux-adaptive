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

  constructor( @Inject(INITIAL_STATE_X) private initialState: AppState) {
    this.state$ = new BehaviorSubject(this.initialState);
    this.action$ = new BehaviorSubject({ type: 'UPDATE_POSTCODE'});

    this.actionSubscription = this.action$
      .withLatestFrom(this.state$)
      .subscribe(([action, state]) => {
        Object.keys(state)
          .filter(sliceName => sliceName != 'configuration')
          .map(sliceName => {
            const sliceReducers = state.configuration.reducers[sliceName];
            Object.keys(sliceReducers)
              .filter(sliceActionType => sliceActionType === action.type)
              .map(sliceActionType => {
                console.log('reduce state:', state[sliceName]);
                console.log('with reducer:', sliceReducers[sliceActionType])
              })
          });
      });
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
