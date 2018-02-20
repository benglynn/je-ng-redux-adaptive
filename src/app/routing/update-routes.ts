import { Action } from '../store/action';
import { Actionable } from '../store/actionable';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';

export class UpdateRoutesAction implements Actionable {
  readonly actionType = Action.updateRoutesAction;
}
