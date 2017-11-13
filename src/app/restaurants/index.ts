export {
  IRestaurantsState,
  Status,
  initialRestaurantState,
  IRestaurantsSliceConfiguration,
  initialRestaurantsConfiguration
} from './state';
export { RestaurantsService } from './restaurants.service';
export { LoadRestaurants, RemoveRestaurants, UpdateRestaurants,
  UpdateRestaurantsStatus } from './actions';
