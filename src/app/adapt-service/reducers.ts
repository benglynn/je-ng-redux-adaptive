import { IConfigurationState } from '../app.configuration';
import { IAction } from '../app.reducers';
import { IConfigurationReducer } from '../configuration/reducers';

export const initAdaptService: IConfigurationReducer = ( action: IAction, newState: IConfigurationState
): IConfigurationState => {
  newState.area.routes.area.effectName = 'newLoadRestaurantsEffect';
  return newState;
};

export interface IAdaptServiceConfigReducers {
  initAdaptService: IConfigurationReducer;
}

export const adaptServiceConfigReducers: IAdaptServiceConfigReducers = {
  initAdaptService: initAdaptService
};

export interface IAdaptServiceConfigReducersConfig {
  INIT_ADAPT_SERVICE: 'initAdaptService';
}

export const adaptServiceConfigReducersConfig: IAdaptServiceConfigReducersConfig = {
  INIT_ADAPT_SERVICE: 'initAdaptService',
};
