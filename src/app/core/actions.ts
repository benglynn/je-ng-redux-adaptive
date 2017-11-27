
import { IAction } from '../app.reducers';

export const UPDATE_IS_ADAPTED = 'UPDATE_IS_ADAPTED';

export class UpdateIsAdaptedAction implements IAction {
  readonly type = UPDATE_IS_ADAPTED;
  constructor(public payload: boolean) {}
}
