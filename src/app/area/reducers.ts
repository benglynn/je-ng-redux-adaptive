import { ReducerFunc } from '../store';
import { UpdateAreaAction } from './actions';
import { AreaState } from './state';

export type AreaReducerFunc = ReducerFunc<AreaState>;

export enum AreaReducer {
  updateAreaReducer = 'updateAreaReducer',
  // Adapters add area reducers below
}

export const areaReducerAsFunc = (areaReducer: AreaReducer): AreaReducerFunc => {
  switch (areaReducer) {
    case AreaReducer.updateAreaReducer:
    return updateAreaReducer;
  }
  return noCaseFor(areaReducer);
};
function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }

// TODO: move the following to separate files

const updateAreaReducer: AreaReducerFunc = (
  action: UpdateAreaAction, state: AreaState
): AreaState => {
  return { ...state, postcode: action.payload };
};
