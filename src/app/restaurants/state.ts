import { Restaurant } from '../restaurants/restaurant';
import { Actionable } from '../store/actionable';
import { ReducerFunc } from '../store/reducer-func';
import { Reducible } from '../store/reducible';
import { ReduceStateSlice } from '../store/reduce-state-slice';
import { RestaurantsReducer } from './reducers/restaurants-reducer';
import { restaurantsReducerCall } from './reducers/restaurants-reducer-call';

export interface RestaurantsState extends Reducible<RestaurantsReducer> {
  data: null | Restaurant[];
}

export const initialRestaurantsState: RestaurantsState = {
  data: null,
  reducers: {
    updateRestaurnatsAction: RestaurantsReducer.updateRestaurantsReducer,
    removeRestaurantsAction: RestaurantsReducer.removeRestaurantsReducer,
  }
};

export const reduceRestaurantsStateOrNull: ReduceStateSlice<RestaurantsState> = (
  currentState: RestaurantsState, action: Actionable
): RestaurantsState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : restaurantsReducerCall(reducer)(
    action, currentState);
};



/* Deprecated below *//////////////////////////////////////////////////////////


export interface IRestaurantsConfiguration {
  views: {
    resultView: string;
  };
}

export const initialRestaurantsConfiguration: IRestaurantsConfiguration = {
  views: {
    resultView: 'resultView',
  }
};
