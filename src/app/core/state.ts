import { IRouteConfig } from '../app.configuration';
import { ICoreEffectName } from './effects';

export interface ICoreState {
  url: string|null;
  isUrlResolved: boolean;
  isAdapted: boolean;
  isDebugging: boolean;
  routes: IRouteConfig[];
}

export const initialCoreState: ICoreState = {
  url: null,
  isUrlResolved: false,
  isAdapted: false,
  isDebugging: false,
  routes: [
    {
      viewName: 'homeView',
      pattern: '^$'
    }, {
      viewName: 'areaView',
      pattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      effectName: 'loadRestaurantsEffect'
    }
  ],
};

export interface ICoreConfiguration {
  reducers: {
    NAVIGATION_END: string;
    UPDATE_IS_ADAPTED: string;
    UPDATE_IS_DEBUGGING: string;
    UPDATE_IS_URL_RESOLVED: string;
  };
  effects: {
    UPDATE_AREA: ICoreEffectName;
  };
}

export const initialCoreConfiguration: ICoreConfiguration = {
  reducers: {
    NAVIGATION_END: 'navigationEnd',
    UPDATE_IS_URL_RESOLVED: 'updateIsUrlResolved',
    UPDATE_IS_ADAPTED: 'updateIsAdapted',
    UPDATE_IS_DEBUGGING: 'updateIsDebugging',
  },
  effects: {
    UPDATE_AREA: 'logPostcodeEffect'
  }
};
