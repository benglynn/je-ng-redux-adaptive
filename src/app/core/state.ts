import { IRouteConfig } from '../configuration/state';
import { ICoreReducerName } from './reducers';
import { ICoreEffectName } from './effects';

export interface ICoreState {
  url: string|null;
}

export const initialCoreState: ICoreState = {
  url: null,
};

export interface ICoreConfiguration {
  routes: [IRouteConfig];
  reducers: {
    NAVIGATION_END: ICoreReducerName;
  };
  effects: {
    UPDATE_AREA: ICoreEffectName;
  }
}

export const initialCoreConfiguration: ICoreConfiguration = {
  routes: [
    { pattern: '^$', viewName: 'homeView' }
  ],
  reducers: {
    NAVIGATION_END: 'navigationEnd'
  },
  effects: {
    UPDATE_AREA: 'logPostcodeEffect'
  }
};
