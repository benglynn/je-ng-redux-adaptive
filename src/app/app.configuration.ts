import { ICoreConfiguration, initialCoreConfiguration } from './core/state';
import { IAreaConfiguration, initialAreaConfiguration } from './area/state';
import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';
import { IEffectName } from './app.effects';
import { IViewName } from './app.views';

export interface IConfigurationState {
  core: ICoreConfiguration;
  area: IAreaConfiguration;
  restaurants: IRestaurantsConfiguration;
  configuration: IConfigurationConfiguration;
}

export interface IConfigurationConfiguration {
  reducers: {};
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  configuration: {
    reducers: {}
  },
};

interface IStringHash {
  [name: string]: string;
}

interface IEffects {
  [name: string]: IEffectName;
}

export interface IRouteConfig {
  pattern: string;
  viewName: IViewName;
  effectName?: string;
}

export interface IRoutes {
  [name: string]: IRouteConfig;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IEffects;
  routes?: IRoutes;
  views?: IStringHash;
}
