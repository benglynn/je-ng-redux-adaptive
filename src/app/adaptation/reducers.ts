import { IReducers } from '../store/types';
import { IConfigurationState } from '../configuration/state';
import { IAction } from '../store/types';

export function initSwapResultView(action: IAction, state: IConfigurationState
): IConfigurationState {
  const config = state;
  const newState = Object.assign({}, state);
  newState.restaurants.views.resultView = 'newResultView';
  console.log(newState);
  return newState;
}

export const reducers: IReducers = {
  'initSwapResultView': initSwapResultView
};

