
import { Action } from '../../store/action';
import { Actionable } from '../../store/actionable';

export class UpdateIsDebuggingAction implements Actionable {
  readonly actionType = Action.updateIsDebuggingAction;
  constructor(public payload: boolean) {}
}
