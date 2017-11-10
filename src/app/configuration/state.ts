import { initialCoreConfiguration } from '../core';
import { initialAreaConfiguration } from '../area';
import { initialRestaurantsConfiguration } from '../restaurants';

export interface IConfigurationState {
  core: ISliceConfiguration;
  area: ISliceConfiguration;
  restaurants: ISliceConfiguration;
  // routes: IRoutesConfig;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,

  // routes: {
  //   'home': {
  //     urlPattern: '^$',
  //     rootViewName: 'homeView'
  //   },
  //   'area': {
  //     urlPattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
  //     resolverName: 'areaRootViewResolver'
  //   },
  //   'error404': {
  //     urlPattern: '.*',
  //     rootViewName: 'error404View'
  //   }
  // }
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
