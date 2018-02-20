import { Actionable } from '../../store/actionable';
import { ReduceStateSlice } from '../../store/reduce-state-slice';
import { RestaurantsState } from './restaurants-state';
import { restaurantsReducerCall } from '../reducers/restaurants-reducer-call';

export const reduceRestaurantsStateOrNull: ReduceStateSlice<RestaurantsState> = (
  currentState: RestaurantsState, action: Actionable
): RestaurantsState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : restaurantsReducerCall(reducer)(
    action, currentState);
};
