import {
  ICoreState, initialCoreState, ICoreConfiguration
  } from './core/state';
import {
  IAreaState, initialAreaState, IAreaConfiguration
  } from './area/state';
import {
  IRestaurantsState, initialRestaurantState, IRestaurantsConfiguration
  } from './restaurants/state';
import {
  IConfigurationState, initialConfigurationState, IConfigurationConfiguration
  } from './app.configuration';
import {
  IAction,
  IAllCoreReducers, allCoreReducers,
  IAllAreaReducers, allAreaReducers,
  IAllRestaurantsReducers, allRestaurantsReducers,
  IAllConfigurationReducers, allConfigurationReducers,
  } from './app.reducers';

export interface IAppState {
  core: ICoreState;
  area: IAreaState;
  restaurants: IRestaurantsState;
  configuration: IConfigurationState;
}

export type IAppStateKey = keyof IAppState;

export const initialState: IAppState = {
  core: initialCoreState,
  area: initialAreaState,
  restaurants: initialRestaurantState,
  configuration: initialConfigurationState
};

export const stateReducers = {
  core: allCoreReducers,
  area: allAreaReducers,
  restaurants: allRestaurantsReducers,
  configuration: allConfigurationReducers,
};
