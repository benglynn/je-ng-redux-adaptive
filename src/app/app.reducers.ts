import { InjectionToken } from '@angular/core';
import { IRestaurantsReducers, restaurantReducers } from './restaurants/reducers';
import { ICoreReducers, coreReducers } from './core/reducers';
import { IAreaReducers, areaReducers } from './area/reducers';
import { IAdaptResultViewConfigReducers, adaptResultViewConfigReducers } from './adapt-result-view/reducers';
import { IAdaptRoutesConfigReducers, adaptRoutesConfigReducers } from './adapt-routes/reducers';

type INoReducers = Object;

export interface IAction {
  type: string;
  payload?: any;
}

export type IReducer<T> = (action: IAction, state: T) => T;

export interface IAllAreaReducers extends IAreaReducers, INoReducers {}

export interface IAllRestaurantsReducers extends IRestaurantsReducers,
  INoReducers {}

export interface IAllConfigurationReducers extends
  IAdaptResultViewConfigReducers,
  IAdaptRoutesConfigReducers {}

export type IAllAreaReducerName = keyof IAllAreaReducers;

export type IAllRestaurantsReducerName = keyof IAllRestaurantsReducers;

export type IAllConfigurationReducerName = keyof IAllConfigurationReducers;

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
  ...adaptRoutesConfigReducers,
};

