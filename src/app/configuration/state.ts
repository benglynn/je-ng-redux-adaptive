import { initialCoreConfiguration } from '../core';
import { initialAreaConfiguration } from '../area';
import { initialRestaurantsConfiguration } from '../restaurants';

export interface IConfigurationState {
  core: ISliceConfiguration;
  area: ISliceConfiguration;
  restaurants: ISliceConfiguration;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
};

interface IStringHash {
  [name: string]: string;
}

export interface IRouteConfig {
  pattern: string;
  viewName?: string;
  resolverName?: string;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IStringHash;
  routes?: IRouteConfig[];
  views?: IStringHash;
}
