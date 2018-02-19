import { Action, Actionable } from '../store';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';

export class UpdateRoutesAction implements Actionable {
  readonly actionType = Action.updateRoutesAction;
}
