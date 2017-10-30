import * as fromPostcode from './postcode';
import * as fromRestaurants from './restaurants';
import * as fromConfiguration from './configuration';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  postcode: fromPostcode.State;
  restaurants: fromRestaurants.State;
  configuration: fromConfiguration.State;
}

export const initialState: State = {
  postcode: fromPostcode.initialState,
  restaurants: fromRestaurants.initialState,
  configuration: fromConfiguration.initialState
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = []; // [debug];

export const reducers: ActionReducerMap<State> = {
  postcode: fromPostcode.reducer,
  restaurants: fromRestaurants.reducer,
  configuration: fromConfiguration.reducer
};

