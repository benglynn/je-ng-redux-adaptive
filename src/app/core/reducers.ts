import { IReducer } from '../app.reducers';
import { NavigationEndAction } from '../routing/actions';
import { ICoreState } from './state';
import { UpdateIsAdaptedAction, UpdateIsDebuggingAction } from './actions';

type ICoreReducer = IReducer<ICoreState>;

const navigationEnd: ICoreReducer = (
  action: NavigationEndAction, state: ICoreState
): ICoreState => {
  return { ...state, url: action.payload };
};

const updateIsAdapated: ICoreReducer = (
  action: UpdateIsAdaptedAction, state: ICoreState
): ICoreState => {
  return { ...state, isAdapted: action.payload };
};

const updateIsDebugging: ICoreReducer = (
  action: UpdateIsDebuggingAction, state: ICoreState
): ICoreState => {
  return { ...state, isDebugging: action.payload };
};

export interface ICoreReducers {
  navigationEnd: ICoreReducer;
  updateIsAdapted: ICoreReducer;
  updateIsDebugging: ICoreReducer;
}

export type ICoreReducerName = keyof ICoreReducers;

export const coreReducers: ICoreReducers = {
  navigationEnd: navigationEnd,
  updateIsAdapted: updateIsAdapated,
  updateIsDebugging: updateIsDebugging,
};

