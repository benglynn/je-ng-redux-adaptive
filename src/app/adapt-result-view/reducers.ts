import { IConfigurationState } from '../app.configuration';
import { IAction } from '../app.reducers';
import { IConfigurationReducer } from '../configuration/reducers';

export const initAdaptResultView: IConfigurationReducer = (
  action: IAction,
  newState: IConfigurationState
): IConfigurationState => {
  newState.restaurants.views.resultView = 'newResultView'; // TODO: compiler prevents non view here
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
