import * as fromPostcode from './postcode';
import * as fromRestaurants from './restaurants';
import * as fromConfiguration from './configuration';
import { ActionReducerMap } from '@ngrx/store';

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

export const reducers: ActionReducerMap<State> = {
  postcode: fromPostcode.reducer,
  restaurants: fromRestaurants.reducer,
  configuration: fromConfiguration.reducer
};

