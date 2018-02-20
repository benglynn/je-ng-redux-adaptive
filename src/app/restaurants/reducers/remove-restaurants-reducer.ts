import { RestaurantsReducerFunc } from './restaurants-reducer-func';
import { RemoveRestaurantsAction } from '../actions/remove-restaurants-action';
import { RestaurantsState } from '../state';

export const removeRestaurantsReducer: RestaurantsReducerFunc = (
  action: RemoveRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: null };
};
