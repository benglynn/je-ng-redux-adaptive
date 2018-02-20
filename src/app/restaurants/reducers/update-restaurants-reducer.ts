import { RestaurantsReducerFunc } from './restaurants-reducer-func';
import { RestaurantsState } from '../state/restaurants-state';
import { UpdateRestaurantsAction } from '../actions/update-restaurants-action';

export const updateRestaurantsReducer: RestaurantsReducerFunc = (
  action: UpdateRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: action.payload };
};
