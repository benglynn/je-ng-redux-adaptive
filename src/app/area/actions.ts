import { IAction } from '../store/types';
import { AreaState } from './state';

export const UPDATE_AREA = 'UPDATE_AREA';

export class UpdateAreaAction implements IAction {
  readonly type = UPDATE_AREA;
  constructor(public payload: AreaState) {}
}
