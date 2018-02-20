import { Action } from '../../store/action';
import { Actionable } from '../../store/actionable';

export class NavigationEndAction implements Actionable {
  readonly actionType = Action.navigationEndAction;
  constructor( public payload: string ) {}
}
