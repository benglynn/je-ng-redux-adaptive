import { IActionX } from '../store/types';
import { Restaurant } from '../restaurant';
import { State as Postcode } from '../postcode';
import { State, Status } from './state';

export const LOAD_RESTAURANTS = '[Restaurant] load restaurants';
export const UPDATE_RESTAURANTS = '[Restaurant] update restaurants';
export const REMOVE_RESTAURANTS = '[Restaurant] remove restaurants';
export const UPDATE_STATUS = '[Restaurant] update status';

export class LoadRestaurants implements IActionX {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurants implements IActionX {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: Restaurant[]) {}
}

export class RemoveRestaurants implements IActionX {
  readonly type = REMOVE_RESTAURANTS;
}

export class UpdateStatus implements IActionX {
  readonly type = UPDATE_STATUS;
  constructor(public payload: Status) {}
}
