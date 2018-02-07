import { Action, Actionable } from '../store';

import { IAction } from '../app.reducers';

export const NAVIGATION_START = 'NAVIGATION_START';
export const NAVIGATION_END = 'NAVIGATION_END';

export class NavigationStartAction implements IAction, Actionable {
  readonly type = NAVIGATION_START;
  readonly actionType = Action.navigationStartAction;
  constructor( public payload: string ) {}
}

export class NavigationEndAction implements IAction, Actionable {
  readonly type = NAVIGATION_END;
  readonly actionType = Action.navigationEndAction;
  constructor( public payload: string ) {}
}
