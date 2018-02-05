import { IReducer } from '../app.reducers';
import { NavigationEndAction } from '../routing/actions';
import { ICoreState } from './state';
import { UpdateIsAdaptedAction, UpdateIsDebuggingAction, UpdateIsUrlResolved } from './actions';
import { initAdaptService } from '../adapt-service/reducers';

export type ICoreReducer = IReducer<ICoreState>;

const navigationEnd: ICoreReducer = (
  action: NavigationEndAction, state: ICoreState
): ICoreState => {
  return { ...state, url: action.payload };
};

const updateIsUrlResolved: ICoreReducer = (
  action: UpdateIsUrlResolved, state: ICoreState
): ICoreState => {
  return { ...state, isUrlResolved: action.payload };
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
  updateIsUrlResolved: ICoreReducer;
  updateIsAdapted: ICoreReducer;
  updateIsDebugging: ICoreReducer;
  INIT_ADAPT_SERVICE: ICoreReducer;
}

export type ICoreReducerName = keyof ICoreReducers;

export const coreReducers: ICoreReducers = {
  navigationEnd: navigationEnd,
  updateIsUrlResolved: updateIsUrlResolved,
  updateIsAdapted: updateIsAdapated,
  updateIsDebugging: updateIsDebugging,
  INIT_ADAPT_SERVICE: initAdaptService,
};

