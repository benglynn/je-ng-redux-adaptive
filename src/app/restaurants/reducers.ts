import { IReducer } from '../app.reducers';
import { UpdateRestaurants, RemoveRestaurants } from './actions';
import { IRestaurantsState } from './state';

type IRestaurantsReducer = IReducer<IRestaurantsState>;

export const updateRestaurants: IRestaurantsReducer = (
  action: UpdateRestaurants,
  state: IRestaurantsState
) => {
  return { data: action.payload};
};

export const removeRestaurants: IRestaurantsReducer = (
  action: RemoveRestaurants
) => {
  return { status: null, data: null };
};

export interface IRestaurantsReducers  {
  updateRestaurants: IRestaurantsReducer;
  removeRestaurants: IRestaurantsReducer;
}

export type IRestaurantsReducerName = keyof IRestaurantsReducers;

export const restaurantReducers: IRestaurantsReducers = {
  updateRestaurants: updateRestaurants,
  removeRestaurants: removeRestaurants,
};

