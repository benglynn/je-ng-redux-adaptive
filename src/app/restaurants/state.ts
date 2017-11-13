import { IRestaurant } from '../restaurant';
import { ISliceConfiguration } from '../configuration';

export enum Status { Loading, Okay, Error }

export interface IRestaurantsState {
  status: null | Status;
  data: null | IRestaurant[];
}

export const initialRestaurantState: IRestaurantsState = { status: null, data: null };

export interface IRestaurantsSliceConfiguration extends ISliceConfiguration {
  reducers: {
    'UPDATE_RESTAURANTS': string;
    'REMOVE_RESTAURANTS': string;
    'UPDATE_RESTAURANTS_STATUS': string;
  };
  effects: {
    'LOAD_RESTAURANTS': string;
  };
  views: {
    'resultView': string;
  };
}

export const initialRestaurantsConfiguration: IRestaurantsSliceConfiguration = {
  reducers: {
    'UPDATE_RESTAURANTS': 'updateRestaurants',
    'REMOVE_RESTAURANTS': 'removeRestaurants',
    'UPDATE_RESTAURANTS_STATUS': 'UpdateRestaurantsStatus'
  },
  effects: {
    'LOAD_RESTAURANTS': 'loadRestaurants'
  },
  views: {
    'resultView': 'resultView'
  }
};
