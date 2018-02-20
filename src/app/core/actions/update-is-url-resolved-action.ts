import { Actionable } from '../../store/actionable';
import { Action } from '../../store/action';

export class UpdateIsUrlResolvedAction implements Actionable {
  readonly actionType = Action.updateIsUrlResolvedAction;
  constructor(public payload: boolean) {}
}
