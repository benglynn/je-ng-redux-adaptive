import { Action } from '@ngrx/store';

export interface State {
  loadRestaurantsEffect: string;
}

export const initialState: State = {
  loadRestaurantsEffect: 'loadRestaurants'
};

export function reducer(state: State = initialState, action: Action) {
  return state;
}
