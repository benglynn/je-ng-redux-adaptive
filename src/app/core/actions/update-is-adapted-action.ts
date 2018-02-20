import { Actionable } from '../../store/actionable';
import { Action } from '../../store/action';

export class UpdateIsAdaptedAction implements Actionable {
  readonly actionType = Action.updateIsAdaptedAction;
  constructor(public payload: boolean) {}
}
