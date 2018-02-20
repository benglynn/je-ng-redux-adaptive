import { CoreReducerFunc } from './core-reducer-func';
import { CoreState } from '../state/core-state';
import { NavigationEndAction } from '../../presentation/actions';

export const navigationEndReducer: CoreReducerFunc = (
  action: NavigationEndAction, state: CoreState
): CoreState => {
  return { ...state, url: action.payload };
};
