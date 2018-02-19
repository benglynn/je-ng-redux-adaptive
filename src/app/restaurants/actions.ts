import { IAction } from '../app.reducers';
import { IRestaurant } from '../restaurant';
import { AreaState as Postcode } from '../area';
import { Action } from '../store';

export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';
export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const REMOVE_RESTAURANTS = 'REMOVE_RESTAURANTS';
export const UPDATE_RESTAURANTS_STATUS = 'UPDATE_RESTAURANTS_STATUS';

export class LoadRestaurants implements IAction {
  readonly type = LOAD_RESTAURANTS;
  readonly actionType = Action.loadRestaurantsAction;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurants implements IAction {
  readonly type = UPDATE_RESTAURANTS;
  readonly actionType = Action.updateRestaurnatsAction;
  constructor(public payload: IRestaurant[]) {}
}

export class RemoveRestaurants implements IAction {
  readonly type = REMOVE_RESTAURANTS;
  readonly actionType = Action.removeRestaurantsAction;
}
