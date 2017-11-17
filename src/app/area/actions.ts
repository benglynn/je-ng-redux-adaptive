import { IAction } from '../app.reducers';
import { IAreaState } from './state';

export const UPDATE_AREA = 'UPDATE_AREA';
export const VISIT_AREA = 'VISIT_AREA';

export class UpdateAreaAction implements IAction {
  readonly type = UPDATE_AREA;
  constructor(public payload: IAreaState) {}
}

export class VisitAreaAction implements IAction {
  readonly type = VISIT_AREA;
  constructor(public payload: IAreaState) {}
}
