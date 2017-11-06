import { IAction } from '../store/types';
import { Restaurant } from '../restaurant';
import { State as Postcode } from '../postcode';
import { State, Status } from './state';

export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';
export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const REMOVE_RESTAURANTS = 'REMOVE_RESTAURANTS';
export const UPDATE_RESTAURANT_STATUS = 'UPDATE_RESTAURANT_STATUS';

export class LoadRestaurants implements IAction {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurants implements IAction {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: Restaurant[]) {}
}

export class RemoveRestaurants implements IAction {
  readonly type = REMOVE_RESTAURANTS;
}

export class UpdateRestaurantStatus implements IAction {
  readonly type = UPDATE_RESTAURANT_STATUS;
  constructor(public payload: Status) {}
}
