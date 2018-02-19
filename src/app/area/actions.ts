import { Action, Actionable } from '../store';


import { IAction } from '../app.reducers';
import { PostcodeOrNull } from './state';

export const UPDATE_AREA = 'UPDATE_AREA';
export const VISIT_AREA = 'VISIT_AREA';

export class UpdateAreaAction implements IAction, Actionable {
  readonly type = UPDATE_AREA;
  readonly actionType = Action.updateIsAdaptedAction;

  constructor(public payload: PostcodeOrNull) {}
}

export class VisitAreaAction implements IAction, Actionable {
  readonly type = VISIT_AREA;
  readonly actionType = Action.visitAreaAction;
  constructor(public payload: PostcodeOrNull) {}
}
