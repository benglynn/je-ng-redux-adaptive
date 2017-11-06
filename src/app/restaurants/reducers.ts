import { IReducers } from '../store/types';
import {
  UpdateRestaurants,
  RemoveRestaurants,
  UpdateRestaurantsStatus as UpdateRestaurantsStatusAction } from './actions';
import { State, Status } from './state';

export function updateRestaurants(action: UpdateRestaurants, state: State) {
  return { status: Status.Okay, data: action.payload};
}

export function removeRestaurants(action: RemoveRestaurants) {
  return { status: null, data: null };
}

export function UpdateRestaurantsStatus(action: UpdateRestaurantsStatusAction, state: State) {
  return Object.assign({}, state, {status: action.payload});
}

export const reducers: IReducers = {
  'updateRestaurants': updateRestaurants,
  'removeRestaurants': removeRestaurants,
  'UpdateRestaurantsStatus': UpdateRestaurantsStatus
};

