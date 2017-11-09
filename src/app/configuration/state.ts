import { initialAreaConfiguration } from '../area';
import { initialRestaurantsConfiguration } from '../restaurants';

export interface IConfigurationState {
  area: ISliceConfiguration;
  restaurants: ISliceConfiguration;
  routes: IRoutesConfig;
}

export const initialConfigurationState: IConfigurationState = {
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  routes: {
    'home': {
      urlPattern: '^$',
      rootViewName: 'homeView'
    },
    'area': {
      urlPattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      rootViewName: 'areaView'
    },
    'error404': {
      urlPattern: '.*',
      rootViewName: 'error404View'
    }
  }
};

interface IStringHash {
  [name: string]: string;
}

export interface IRouteConfig {
  urlPattern: string;
  rootViewName?: string;
  resolverName?: string;
}

export interface IRoutesConfig {
  [name: string]: IRouteConfig;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IStringHash;
  routes?: IRoutesConfig;
  views?: IStringHash;
}
