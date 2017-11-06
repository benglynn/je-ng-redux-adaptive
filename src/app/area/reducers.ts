import { IReducers } from '../store/types';
import { UpdateAreaAction } from './actions';
import { AreaState } from './state';

export function updateAreaReducer(action: UpdateAreaAction, state: AreaState) {
  return action.payload;
}

export const reducers: IReducers = {
  'updateArea': updateAreaReducer
};

