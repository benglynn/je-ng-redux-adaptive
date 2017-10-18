import * as fromPostcode from './postcode';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  postcode: fromPostcode.State;
}

export const initialState: State = {
  postcode: fromPostcode.initialState
};

export const reducers: ActionReducerMap<State> = {
  postcode: fromPostcode.reducer
};

