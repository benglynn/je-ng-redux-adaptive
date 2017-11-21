import { ICoreConfiguration, initialCoreConfiguration } from './core/state';
import { IAreaConfiguration, initialAreaConfiguration } from './area/state';
import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';
import { IAdaptRoutesConfiguration, initialAdaptRoutesConfiguration } from './adapt-routes/state';
import { IAdaptResultViewConfigReducersConfig, adaptResultViewConfigReducersConfig } from './adapt-result-view/reducers';
import { IAdaptRoutesConfigReducersConfig, adaptRoutesConfigReducersConfig } from './adapt-routes/reducers';
import { IViewName } from './app.views';

export interface IConfigurationState {
  core: ICoreConfiguration;
  area: IAreaConfiguration;
  restaurants: IRestaurantsConfiguration;
  adaptRoutes: IAdaptRoutesConfiguration;
  configuration: IConfigurationConfiguration;
}

export interface IConfigurationConfiguration {
  reducers: {} | IAdaptResultViewConfigReducersConfig;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  adaptRoutes: initialAdaptRoutesConfiguration,
  configuration: {
    reducers: {
      ...adaptResultViewConfigReducersConfig,
      ...adaptRoutesConfigReducersConfig,
    }
  },
};

interface IStringHash {
  [name: string]: string;
}

export interface IRouteConfig {
  pattern: string;
  viewName: IViewName;
  effectName?: string;
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
