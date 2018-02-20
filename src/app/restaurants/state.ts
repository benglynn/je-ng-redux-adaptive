import { Restaurant } from '../restaurant';
import { Actionable } from '../store/actionable';
import { ReducerFunc } from '../store/reducer-func';
import { Reducible } from '../store/reducible';
import { ReduceStateSlice } from '../store/reduce-state-slice';
import { RestaurantsReducer, restaurantsReducerAsFunc } from './reducers';

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
  return reducer === undefined ? null : restaurantsReducerAsFunc(reducer)(
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
