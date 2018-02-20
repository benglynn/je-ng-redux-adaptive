import { Action, Actionable } from '../store';

export class NavigationStartAction implements Actionable {
  readonly actionType = Action.navigationStartAction;
  constructor( public payload: string ) {}
}

export class NavigationEndAction implements Actionable {
  readonly actionType = Action.navigationEndAction;
  constructor( public payload: string ) {}
}
