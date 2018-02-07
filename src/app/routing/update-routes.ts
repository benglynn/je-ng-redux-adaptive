import { IAction } from '../app.reducers';
import { Action } from '../store';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';

export class UpdateRoutesAction implements IAction {
  readonly type = UPDATE_ROUTES;
  readonly actionType = Action.updateRoutesAction;
}
