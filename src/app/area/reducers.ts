import { IReducer } from '../app.reducers';
import { UpdateAreaAction } from './actions';
import { IAreaState } from './state';

type IAreaReducer = IReducer<IAreaState>;

export const updateAreaReducer: IAreaReducer = (
  action: UpdateAreaAction,
  state: IAreaState
): IAreaState => {
  return action.payload;
};

export interface IAreaReducers {
  updateArea: IAreaReducer;
}

export type IAreaReducerName = keyof IAreaReducers;

export const areaReducers: IAreaReducers = {
  updateArea: updateAreaReducer
};

