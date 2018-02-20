import { Action } from '../store/action';
import { Actionable } from '../store/actionable';
import { Restaurant } from '../restaurant';
import { PostcodeOrNull } from '../area/state';


export class LoadRestaurants implements Actionable {
  readonly actionType = Action.loadRestaurantsAction;
  constructor(public payload: PostcodeOrNull) {}
}

export class UpdateRestaurantsAction implements Actionable {
  readonly actionType = Action.updateRestaurnatsAction;
  constructor(public payload: Restaurant[]) {}
}

export class RemoveRestaurantsAction implements Actionable {
  readonly actionType = Action.removeRestaurantsAction;
}
