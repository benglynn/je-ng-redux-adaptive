import { RestaurantsReducer } from './restaurants-reducer';
import { RestaurantsReducerFunc } from './restaurants-reducer-func';
import { removeRestaurantsReducer } from './remove-restaurants-reducer';
import { updateRestaurantsReducer } from './update-restaurants-reducer';

export const restaurantsReducerCall = (
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
