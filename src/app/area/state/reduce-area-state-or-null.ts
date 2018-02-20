import { areaReducerCall } from '../reducers/area-reducer-call';
import { Actionable } from '../../store/actionable';
import { ReduceStateSlice } from '../../store/reduce-state-slice';
import { AreaState } from './area-state';

export const reduceAreaStateOrNull: ReduceStateSlice<AreaState> = (
  currentState: AreaState, action: Actionable
): AreaState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : areaReducerCall(reducer)(
    action, currentState);
};
