import { IRestaurant } from '../restaurant';
import { IRestaurantsReducerName } from './reducers';

export interface IRestaurantsState {
  data: null | IRestaurant[];
}

export const initialRestaurantState: IRestaurantsState = { data: null };

export interface IRestaurantsConfiguration {
  reducers: {
    UPDATE_RESTAURANTS: IRestaurantsReducerName;
    REMOVE_RESTAURANTS: IRestaurantsReducerName;
  };
  effects: {
    LOAD_RESTAURANTS: string;
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
  effects: {
    LOAD_RESTAURANTS: 'loadRestaurants',
  },
  views: {
    resultView: 'resultView',
  }
};
