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
