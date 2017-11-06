import { IReducers } from '../store/types';
import { UpdateRestaurants, RemoveRestaurants, UpdateRestaurantStatus } from './actions';
import { State, Status } from './state';

export function updateRestaurants(action: UpdateRestaurants, state: State) {
  return { status: Status.Okay, data: action.payload};
}

export function removeRestaurants(action: RemoveRestaurants) {
  return { status: null, data: null };
}

export function updateRestaurantStatus(action: UpdateRestaurantStatus, state: State) {
  return Object.assign({}, state, {status: action.payload});
}

export const reducers: IReducers = {
  'updateRestaurants': updateRestaurants,
  'removeRestaurants': removeRestaurants,
  'updateRestaurantStatus': updateRestaurantStatus
};

