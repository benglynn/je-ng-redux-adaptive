import { IReducers } from '../store/types';
import { NavigationEndAction } from '../routing/actions';
import { ICoreState } from './state';

export function navigationEnd(action: NavigationEndAction, state: ICoreState
): ICoreState {
  return {url: action.payload};
}

export const reducers: IReducers = {
  'navigationEnd': navigationEnd
};

