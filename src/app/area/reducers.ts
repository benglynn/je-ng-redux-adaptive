import { IReducers } from '../store/types';
import { UpdateAreaAction } from './actions';
import { IAreaState } from './state';

export function updateAreaReducer(action: UpdateAreaAction, state: IAreaState) {
  return action.payload;
}

export const reducers: IReducers = {
  'updateArea': updateAreaReducer
};

