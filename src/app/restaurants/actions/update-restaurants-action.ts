import { Action } from '../../store/action';
import { Actionable } from '../../store/actionable';
import { Restaurant } from '../../restaurants/restaurant';

export class UpdateRestaurantsAction implements Actionable {
  readonly actionType = Action.updateRestaurnatsAction;
  constructor(public payload: Restaurant[]) {}
}
