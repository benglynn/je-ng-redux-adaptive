import { coreReducerCall } from '../reducers/core-reducer-call';
import { Actionable } from '../../store/actionable';
import { ReduceStateSlice } from '../../store/reduce-state-slice';
import { CoreState } from './core-state';

export const reduceCoreStateOrNull: ReduceStateSlice<CoreState> = (
  currentState: CoreState, action: Actionable
): CoreState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : coreReducerCall(reducer)(
    action, currentState);
};
