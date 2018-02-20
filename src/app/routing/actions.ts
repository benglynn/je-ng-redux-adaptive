import { Action } from '../store/action';
import { Actionable } from '../store/actionable';

export class NavigationStartAction implements Actionable {
  readonly actionType = Action.navigationStartAction;
  constructor( public payload: string ) {}
}

export class NavigationEndAction implements Actionable {
  readonly actionType = Action.navigationEndAction;
  constructor( public payload: string ) {}
}
