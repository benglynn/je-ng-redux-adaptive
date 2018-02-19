import { AreaReducer, areaReducerAsFunc } from './reducers';
import { Actionable, ReducerFunc, Reducible, ReduceStateSlice } from '../store';

export const areaPattern = /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

export type PostcodeOrNull = string|null;

export interface AreaState extends Reducible<AreaReducer> {
  postcode: PostcodeOrNull;
}

export const initialAreaState: AreaState = {
  postcode: null,
  reducers: {
    updateAreaAction: AreaReducer.updateAreaReducer,
  }
};

export const reduceAreaStateOrNull: ReduceStateSlice<AreaState> = (
  currentState: AreaState, action: Actionable
): AreaState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : areaReducerAsFunc(reducer)(
    action, currentState);
};
