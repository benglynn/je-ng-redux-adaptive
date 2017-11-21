import { IRestaurant } from '../restaurant';
import { IAllRestaurantsReducerName } from '../app.reducers';

export interface IRestaurantsState {
  data: null | IRestaurant[];
}

export const initialRestaurantState: IRestaurantsState = { data: null };

export interface IRestaurantsConfiguration {
  reducers: {
    UPDATE_RESTAURANTS: IAllRestaurantsReducerName;
    REMOVE_RESTAURANTS: IAllRestaurantsReducerName;
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
