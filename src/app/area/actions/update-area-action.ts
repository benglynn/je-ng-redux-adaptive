import { Actionable } from '../../store/actionable';
import { Action } from '../../store/action';
import { PostcodeOrNull } from '../state';

export class UpdateAreaAction implements Actionable {
  readonly actionType = Action.updateAreaAction;

  constructor(public payload: PostcodeOrNull) {}
}
