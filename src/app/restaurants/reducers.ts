import { ReducerFunc } from '../store';
import { UpdateRestaurantsAction, RemoveRestaurantsAction } from './actions';
import { RestaurantsState } from './state';

export type RestaurantsReducerFunc = ReducerFunc<RestaurantsState>;

export enum RestaurantsReducer {
  updateRestaurantsReducer = 'updateRestaurantsReducer',
  removeRestaurantsReducer = 'removeRestaurantsReducer',
}

export const restaurantsReducerAsFunc = (
  restaurantsReducer: RestaurantsReducer): RestaurantsReducerFunc => {
    switch (restaurantsReducer) {
      case RestaurantsReducer.removeRestaurantsReducer:
        return removeRestaurantsReducer;
      case RestaurantsReducer.updateRestaurantsReducer:
       return updateRestaurantsReducer;
    }
  return noCaseFor(restaurantsReducer);
};
function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }

// TODO: move the following to separate files

const updateRestaurantsReducer: RestaurantsReducerFunc = (
  action: UpdateRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: action.payload };
};

const removeRestaurantsReducer: RestaurantsReducerFunc = (
  action: RemoveRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: null };
};
