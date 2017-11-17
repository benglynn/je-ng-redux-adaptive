import { IConfigurationState } from '../configuration/state';
import { IAction } from '../app.reducers';
import { IConfigurationReducer } from '../configuration/reducers';

export const initAdaptResultView: IConfigurationReducer = (
  action: IAction,
  state: IConfigurationState
): IConfigurationState => {
  const config = state;
  const newState = Object.assign({}, state);
  newState.restaurants.views.resultView = 'newResultView';
  return newState;
};

export interface IAdaptResultViewReducers {
  initAdaptResultView: IConfigurationReducer;
}

export type IAdaptResultViewReducerName = keyof IAdaptResultViewReducers;

export const adaptResultViewReducers: IAdaptResultViewReducers = {
  initAdaptResultView: initAdaptResultView
};

