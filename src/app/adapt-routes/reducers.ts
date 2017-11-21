import { IConfigurationState } from '../app.configuration';
import { IAction } from '../app.reducers';
import { IConfigurationReducer } from '../configuration/reducers';
import { IRouteConfig } from '../app.configuration';

export const initAdaptRoutes: IConfigurationReducer = (
  action: IAction,
  newState: IConfigurationState
): IConfigurationState => {
  const newRouteConfig: IRouteConfig[] = [{ // TODO: named routes!
      'pattern': '^$',
      'viewName': 'newHomeView' // TODO: compiler guards names!
    }
  ];
  newState.core.routes = newRouteConfig; // TODO: compiler prevents non routes here
  return newState;
};

export interface IAdaptRoutesConfigReducers {
  initAdaptRoutes: IConfigurationReducer;
}

export const adaptRoutesConfigReducers: IAdaptRoutesConfigReducers = {
  initAdaptRoutes: initAdaptRoutes
};

export interface IAdaptRoutesConfigReducersConfig {
  INIT_ADAPT_ROUTES: 'initAdaptRoutes';
}

export const adaptRoutesConfigReducersConfig: IAdaptRoutesConfigReducersConfig = {
  INIT_ADAPT_ROUTES: 'initAdaptRoutes',
};
