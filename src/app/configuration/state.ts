import { initialCoreConfiguration } from '../core';
import { IAreaConfiguration, initialAreaConfiguration } from '../area/state';
import { IRestaurantsConfiguration, initialRestaurantsConfiguration
  } from '../restaurants';
import { ICoreConfiguration } from '../core/state';
import { IAdaptResultViewReducerName  } from '../adapt-result-view/reducers';

export interface IConfigurationState {
  core: ICoreConfiguration;
  area: IAreaConfiguration;
  restaurants: IRestaurantsConfiguration;
  configuration: {
    reducers: {
      INIT_ADAPT_RESULT_VIEW: IAdaptResultViewReducerName;
    }
  };
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration,
  configuration: {
    reducers: {
      INIT_ADAPT_RESULT_VIEW: 'initAdaptResultView'
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
