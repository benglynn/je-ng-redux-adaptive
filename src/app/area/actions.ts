import { Action, Actionable } from '../store';
import { PostcodeOrNull } from './state';

export class UpdateAreaAction implements Actionable {
  readonly actionType = Action.updateAreaAction;

  constructor(public payload: PostcodeOrNull) {}
}

export class VisitAreaAction implements Actionable {
  readonly actionType = Action.visitAreaAction;
  constructor(public payload: PostcodeOrNull) {}
}
