import { IAction } from '../app.reducers';
import { PostcodeOrNull } from './state';
import { Action } from '../store';

export const UPDATE_AREA = 'UPDATE_AREA';
export const VISIT_AREA = 'VISIT_AREA';

export class UpdateAreaAction implements IAction {
  readonly type = UPDATE_AREA;
  readonly actionType = Action.updateIsAdaptedAction;

  constructor(public payload: PostcodeOrNull) {}
}

export class VisitAreaAction implements IAction {
  readonly type = VISIT_AREA;
  readonly actionType = Action.visitAreaAction;
  constructor(public payload: PostcodeOrNull) {}
}
