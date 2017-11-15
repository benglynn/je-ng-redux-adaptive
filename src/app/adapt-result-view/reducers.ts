import { IReducers } from '../store/types';
import { IConfigurationState } from '../configuration/state';
import { IAction } from '../store/types';

export function initAdaptResultView(action: IAction, state: IConfigurationState
): IConfigurationState {
  const config = state;
  const newState = Object.assign({}, state);
  newState.restaurants.views.resultView = 'newResultView';
  return newState;
}

export const reducers: IReducers = {
  'initAdaptResultView': initAdaptResultView
};

