import { UpdateAreaAction } from '../actions/update-area-action';
import { AreaState } from '../area-state';
import { AreaReducerFunc } from './area-reducer-func';

export const updateAreaReducer: AreaReducerFunc = (
  action: UpdateAreaAction, state: AreaState
): AreaState => {
  return { ...state, postcode: action.payload };
};
