import { Action } from '../../store/action';
import { Actionable } from '../../store/actionable';
import { PostcodeOrNull } from '../../area/state';

export class LoadRestaurantsAction implements Actionable {
  readonly actionType = Action.loadRestaurantsAction;
  constructor(public payload: PostcodeOrNull) {}
}
