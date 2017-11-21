import { ICoreConfiguration, initialCoreConfiguration } from './core/state';
import { IAreaConfiguration, initialAreaConfiguration } from './area/state';
import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';
import { IAdaptResultViewConfigReducersConfig, adaptResultViewConfigReducersConfig } from './adapt-result-view/reducers';
import { IAdaptRoutesConfigReducersConfig, adaptRoutesConfigReducersConfig } from './adapt-routes/reducers';

export interface IConfigurationState {
  core: ICoreConfiguration;
  area: IAreaConfiguration;
  restaurants: IRestaurantsConfiguration;
  configuration: IConfigurationConfiguration;
}

export interface IConfigurationConfiguration {
  reducers: {} | IAdaptResultViewConfigReducersConfig;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  configuration: {
    reducers: {
      ...adaptResultViewConfigReducersConfig,
      ...adaptRoutesConfigReducersConfig,
    }
  }
};

interface IStringHash {
  [name: string]: string;
}

export interface IRouteConfig {
  pattern: string;
  viewName: string;
  effectName?: string;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IStringHash;
  routes?: IRouteConfig[];
  views?: IStringHash;
}
