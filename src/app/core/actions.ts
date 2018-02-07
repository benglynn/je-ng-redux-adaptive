
import { Action, Actionable } from '../store';

import { IAction } from '../app.reducers';

export const UPDATE_IS_ADAPTED = 'UPDATE_IS_ADAPTED';
export const UPDATE_IS_URL_RESOLVED = 'UPDATE_IS_URL_RESOLVED';
export const UPDATE_IS_DEBUGGING = 'UPDATE_IS_DEBUGGING';

export class UpdateIsUrlResolvedAction implements IAction, Actionable {
  readonly type = UPDATE_IS_URL_RESOLVED;
  readonly actionType = Action.updateIsUrlResolvedAction;
  constructor(public payload: boolean) {}
}

export class UpdateIsAdaptedAction implements IAction, Actionable {
  readonly type = UPDATE_IS_ADAPTED;
  readonly actionType = Action.updateIsAdaptedAction;
  constructor(public payload: boolean) {}
}

export class UpdateIsDebuggingAction implements IAction, Actionable {
  readonly type = UPDATE_IS_DEBUGGING;
  readonly actionType = Action.updateIsDebuggingAction;
  constructor(public payload: boolean) {}
}
