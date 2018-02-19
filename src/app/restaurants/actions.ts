import { Action, Actionable } from '../store';

import { IAction } from '../app.reducers';
import { Restaurant } from '../restaurant';
import { AreaState as Postcode } from '../area';

export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';
export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const REMOVE_RESTAURANTS = 'REMOVE_RESTAURANTS';
export const UPDATE_RESTAURANTS_STATUS = 'UPDATE_RESTAURANTS_STATUS';

export class LoadRestaurants implements IAction, Actionable {
  readonly type = LOAD_RESTAURANTS;
  readonly actionType = Action.loadRestaurantsAction;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurantsAction implements IAction, Actionable {
  readonly type = UPDATE_RESTAURANTS;
  readonly actionType = Action.updateRestaurnatsAction;
  constructor(public payload: Restaurant[]) {}
}

export class RemoveRestaurantsAction implements IAction, Actionable {
  readonly type = REMOVE_RESTAURANTS;
  readonly actionType = Action.removeRestaurantsAction;
}
