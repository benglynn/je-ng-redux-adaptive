import * as fromPostcode from './postcode';
import * as fromRestaurants from './restaurants';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  postcode: fromPostcode.State;
  restaurants: fromRestaurants.State;
}

export const initialState: State = {
  postcode: fromPostcode.initialState,
  restaurants: fromRestaurants.initialState
};

export const reducers: ActionReducerMap<State> = {
  postcode: fromPostcode.reducer,
  restaurants: fromRestaurants.reducer
};

