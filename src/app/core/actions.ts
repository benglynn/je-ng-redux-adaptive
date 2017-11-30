
import { IAction } from '../app.reducers';

export const UPDATE_IS_ADAPTED = 'UPDATE_IS_ADAPTED';
export const UPDATE_IS_URL_RESOLVED = 'UPDATE_IS_URL_RESOLVED';
export const UPDATE_IS_DEBUGGING = 'UPDATE_IS_DEBUGGING';

export class UpdateIsUrlResolved implements IAction {
  readonly type = UPDATE_IS_URL_RESOLVED;
  constructor(public payload: boolean) {}
}

export class UpdateIsAdaptedAction implements IAction {
  readonly type = UPDATE_IS_ADAPTED;
  constructor(public payload: boolean) {}
}

export class UpdateIsDebuggingAction implements IAction {
  readonly type = UPDATE_IS_DEBUGGING;
  constructor(public payload: boolean) {}
}
