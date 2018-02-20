import { Action } from '../../store/action';
import { Actionable } from '../../store/actionable';

export class RemoveRestaurantsAction implements Actionable {
  readonly actionType = Action.removeRestaurantsAction;
}
