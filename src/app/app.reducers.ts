import { InjectionToken } from '@angular/core';
import { IRestaurantsReducers, restaurantReducers
} from './restaurants/reducers';
import { ICoreReducers, coreReducers } from './core/reducers';
import { IAreaReducers, areaReducers } from './area/reducers';
import { IAdaptResultViewReducers, adaptResultViewReducers
} from './adapt-result-view/reducers';

export interface IAction {
  type: string;
  payload?: any;
}

export type IReducer<T> = (action: IAction, state: T) => T;

export interface IReducers extends
  IRestaurantsReducers,
  ICoreReducers,
  IAreaReducers,
  IAdaptResultViewReducers {}

export const reducers: IReducers = {
  ...restaurantReducers,
  ...coreReducers,
  ...areaReducers,
  ...adaptResultViewReducers,
};

export type IReducerName = keyof IReducers;

export const REDUCERS = new InjectionToken<IReducers>('reducers');
