import { IAction } from '../app.reducers';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';

export class UpdateRoutesAction implements IAction {
  readonly type = UPDATE_ROUTES;
}
