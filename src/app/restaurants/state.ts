import { IRestaurant } from '../restaurant';

export interface IRestaurantsState {
  data: null | IRestaurant[];
}

export const initialRestaurantState: IRestaurantsState = { data: null };

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
