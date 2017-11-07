import { IAction } from '../store/types';
import { IRestaurant } from '../restaurant';
import { IAreaState as Postcode } from '../area';
import { IRestaurantsState, Status } from './state';

export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';
export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const REMOVE_RESTAURANTS = 'REMOVE_RESTAURANTS';
export const UPDATE_RESTAURANTS_STATUS = 'UPDATE_RESTAURANTS_STATUS';

export class LoadRestaurants implements IAction {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurants implements IAction {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: IRestaurant[]) {}
}

export class RemoveRestaurants implements IAction {
  readonly type = REMOVE_RESTAURANTS;
}

export class UpdateRestaurantsStatus implements IAction {
  readonly type = UPDATE_RESTAURANTS_STATUS;
  constructor(public payload: Status) {}
}
