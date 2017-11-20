import { IConfigurationState } from '../app.configuration';
import { IAction } from '../app.reducers';
import { IConfigurationReducer } from '../configuration/reducers';

export const initAdaptResultView: IConfigurationReducer = (
  action: IAction,
  state: IConfigurationState
): IConfigurationState => {
  const config = state;
  const newState = Object.assign({}, state);
  newState.restaurants.views.resultView = 'newResultView';
  newState.core.routes = [
    {
      'pattern': '^home$',
      'viewName': 'homeView'
    }
  ];
  return newState;
};

export interface IAdaptResultViewConfigReducers {
  initAdaptResultView: IConfigurationReducer;
}

export const adaptResultViewConfigReducers: IAdaptResultViewConfigReducers = {
  initAdaptResultView: initAdaptResultView
};

export interface IAdaptResultViewConfigReducersConfig {
  INIT_ADAPT_RESULT_VIEW: 'initAdaptResultView';
}

export const adaptResultViewConfigReducersConfig: IAdaptResultViewConfigReducersConfig = {
  INIT_ADAPT_RESULT_VIEW: 'initAdaptResultView',
};
