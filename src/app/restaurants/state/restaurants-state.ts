import { Reducible } from '../../store/reducible';
import { RestaurantsReducer } from '../reducers/restaurants-reducer';
import { Restaurant } from '../../restaurants/restaurant';

export interface RestaurantsState extends Reducible<RestaurantsReducer> {
  data: null | Restaurant[];
}
