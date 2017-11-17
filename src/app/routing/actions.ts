import { IAction } from '../app.reducers';

export const NAVIGATION_START = 'NAVIGATION_START';
export const NAVIGATION_END = 'NAVIGATION_END';

export class NavigationStartAction implements IAction {
  readonly type = NAVIGATION_START;
  constructor( public payload: string ) {}
}

export class NavigationEndAction implements IAction {
  readonly type = NAVIGATION_END;
  constructor( public payload: string ) {}
}
