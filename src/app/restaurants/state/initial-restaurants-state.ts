import { RestaurantsState } from './restaurants-state';
import { RestaurantsReducer } from '../reducers/restaurants-reducer';

export const initialRestaurantsState: RestaurantsState = {
  data: null,
  reducers: {
    updateRestaurnatsAction: RestaurantsReducer.updateRestaurantsReducer,
    removeRestaurantsAction: RestaurantsReducer.removeRestaurantsReducer,
  }
};
