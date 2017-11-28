import { IRouteConfig } from '../app.configuration';
import { IAllCoreReducerName } from '../app.reducers';
import { ICoreEffectName } from './effects';

export interface ICoreState {
  url: string|null;
  isAdapted: boolean;
  isDebugging: boolean;
}

export const initialCoreState: ICoreState = {
  url: null,
  isAdapted: false,
  isDebugging: false,
};

export interface ICoreConfiguration {
  routes: {
    home: IRouteConfig;
  };
  reducers: {
    NAVIGATION_END: IAllCoreReducerName;
    UPDATE_IS_ADAPTED: IAllCoreReducerName;
    UPDATE_IS_DEBUGGING: IAllCoreReducerName;
  };
  effects: {
    UPDATE_AREA: ICoreEffectName;
  };
}

export const initialCoreConfiguration: ICoreConfiguration = {
  routes: {
    home: { pattern: '^$', viewName: 'homeView' },
  },
  reducers: {
    NAVIGATION_END: 'navigationEnd',
    UPDATE_IS_ADAPTED: 'updateIsAdapted',
    UPDATE_IS_DEBUGGING: 'updateIsDebugging',
  },
  effects: {
    UPDATE_AREA: 'logPostcodeEffect'
  }
};
