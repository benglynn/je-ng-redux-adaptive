import { IAction } from '../store/types';

export const NAVIGATION_END = 'NAVIGATION_END';

export class NavigationEndAction implements IAction {
  readonly type = NAVIGATION_END;
  constructor( public payload: string ) {};
}
