import { Restaurant } from '../restaurant';
import { Actionable, ReducerFunc, Reducible, ReduceStateSlice } from '../store';
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

export const reduceRestaurantsState: ReduceStateSlice<RestaurantsState> = (
  currentState: RestaurantsState, action: Actionable
): RestaurantsState => { // TODO: null if no change
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? currentState : restaurantsReducerAsFunc(reducer)(
    action, currentState);
};



/* Deprecated below *//////////////////////////////////////////////////////////


export interface IRestaurantsConfiguration {
  reducers: {
    UPDATE_RESTAURANTS: String;
    REMOVE_RESTAURANTS: String;
  };
  views: {
    resultView: string;
  };
}

export const initialRestaurantsConfiguration: IRestaurantsConfiguration = {
  reducers: {
    UPDATE_RESTAURANTS: 'updateRestaurants',
    REMOVE_RESTAURANTS: 'removeRestaurants',
  },
  views: {
    resultView: 'resultView',
  }
};
