import { IReducer } from '../app.reducers';
import { NavigationEndAction } from '../routing/actions';
import { ICoreState } from './state';

type ICoreReducer = IReducer<ICoreState>;

const navigationEnd: ICoreReducer = (
  action: NavigationEndAction,
  state: ICoreState
): ICoreState => {
  return {url: action.payload};
};

export interface ICoreReducers {
  navigationEnd: ICoreReducer;
}

export type ICoreReducerName = keyof ICoreReducers;

export const coreReducers: ICoreReducers = {
  navigationEnd: navigationEnd
};

