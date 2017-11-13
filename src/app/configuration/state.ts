import { initialCoreConfiguration } from '../core';
import { initialAreaConfiguration } from '../area';
import { IRestaurantsSliceConfiguration,
  initialRestaurantsConfiguration } from '../restaurants';

export interface IConfigurationState {
  core: ISliceConfiguration;
  area: ISliceConfiguration;
  restaurants: IRestaurantsSliceConfiguration;
  configuration: ISliceConfiguration;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  configuration: {
    reducers: {
      'INIT_ADAPT_RESULT_VIEW': 'initAdaptResultView'
    }
  }
};

interface IStringHash {
  [name: string]: string;
}

export interface IRouteConfig {
  pattern: string;
  viewName: string;
  guardName?: string;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IStringHash;
  routes?: IRouteConfig[];
  views?: IStringHash;
}
