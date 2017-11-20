import { InjectionToken } from '@angular/core';
import { IRestaurantsReducers, restaurantReducers
} from './restaurants/reducers';
import { ICoreReducers, coreReducers } from './core/reducers';
import { IAreaReducers, areaReducers } from './area/reducers';
import { IAdaptResultViewConfigReducers, adaptResultViewConfigReducers
} from './adapt-result-view/reducers';

type INoReducers = Object;

export interface IAction {
  type: string;
  payload?: any;
}

export type IReducer<T> = (action: IAction, state: T) => T;

export interface IAllCoreReducers extends ICoreReducers, INoReducers {}

export interface IAllAreaReducers extends IAreaReducers, INoReducers {}

export interface IAllRestaurantsReducers extends IRestaurantsReducers,
  INoReducers {}

export interface IAllConfigurationReducers extends INoReducers,
IAdaptResultViewConfigReducers {}

export type IAllCoreReducerName = keyof IAllCoreReducers;
export type IAllAreaReducerName = keyof IAllAreaReducers;
export type IAllRestaurantsReducerName = keyof IAllRestaurantsReducers;
export type IAllConfigurationReducerName = keyof IAllConfigurationReducers;

export const allCoreReducers: IAllCoreReducers = {
  ...coreReducers,
  /** no adaptations */
};

export const allAreaReducers: IAllAreaReducers = {
  ...areaReducers,
  /** no adaptations */
};

export const allRestaurantsReducers: IAllRestaurantsReducers = {
  ...restaurantReducers,
  /** no adaptations */
};

export const allConfigurationReducers: IAllConfigurationReducers = {
  ...adaptResultViewConfigReducers,
};



/* all (we won't need this ultimately) */

export interface IReducers extends
  IRestaurantsReducers,
  ICoreReducers,
  IAreaReducers,
  IAdaptResultViewConfigReducers {}

export const reducers: IReducers = {
  ...restaurantReducers,
  ...coreReducers,
  ...areaReducers,
  ...adaptResultViewConfigReducers,
};

export type IReducerName = keyof IReducers;

export const REDUCERS = new InjectionToken<IReducers>('reducers');
