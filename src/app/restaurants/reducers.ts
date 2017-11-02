import { IReducersX } from '../store/types';
import { UpdateRestaurants, RemoveRestaurants, UpdateStatus } from './actions';
import { State, Status } from './state';

export function updateRestaurants(action: UpdateRestaurants, state: State) {
  return { status: Status.Okay, data: action.payload};
}

export function removeRestaurants(action: RemoveRestaurants) {
  return { status: null, data: null };
}

export function updateStatus(action: UpdateStatus, state: State) {
  return Object.assign({}, state, {status: action.payload});
}

export const reducers: IReducersX = {
  'updateRestaurants': updateRestaurants,
  'removeRestaurants': removeRestaurants,
  'updateStatus': updateStatus
}
