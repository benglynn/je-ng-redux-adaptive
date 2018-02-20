
import { Action } from '../store/action';
import { Actionable } from '../store/actionable';

export class UpdateIsUrlResolvedAction implements Actionable {
  readonly actionType = Action.updateIsUrlResolvedAction;
  constructor(public payload: boolean) {}
}

export class UpdateIsAdaptedAction implements Actionable {
  readonly actionType = Action.updateIsAdaptedAction;
  constructor(public payload: boolean) {}
}

export class UpdateIsDebuggingAction implements Actionable {
  readonly actionType = Action.updateIsDebuggingAction;
  constructor(public payload: boolean) {}
}
