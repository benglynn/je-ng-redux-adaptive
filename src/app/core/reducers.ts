import { ReducerFunc } from '../store';

export enum CoreReducer {
  navigationEndReducer = 'navigationEndReducer',
  updateIsUrlResolvedReducer = 'updateIsUrlResolvedReducer',
  updateIsAdaptedReducer = 'updateIsAdaptedReducer',
  updateIsDebuggingReducer = 'updateIsDebuggingReducer',
  initAdaptServiceReducer = 'initAdaptServiceReducer',
}

const callCoreReucer = (coreReducer: CoreReducer): ReducerFunc<CoreState> => {
  switch (coreReducer) {
    case CoreReducer.initAdaptServiceReducer:
    return initAdaptServiceReducer;
    case CoreReducer.navigationEndReducer:
    return navigationEndReducer;
    case CoreReducer.updateIsAdaptedReducer:
    return updateIsAdapatedReducer;
    case CoreReducer.updateIsDebuggingReducer:
    return updateIsDebuggingReducer;
    case CoreReducer.updateIsUrlResolvedReducer:
    return updateIsUrlResolvedReducer;
  }
  return noCaseFor(coreReducer);
};
function noCaseFor(_: never): never { throw new Error(); }


/* Actions to separate files */////////////////////////////////////////////////






/* Reducers to separate files *////////////////////////////////////////////////






/* Deprecated below *//////////////////////////////////////////////////////////


import { IReducer } from '../app.reducers';
import { NavigationEndAction } from '../routing/actions';
import { CoreState } from './state';
import { UpdateIsAdaptedAction, UpdateIsDebuggingAction, UpdateIsUrlResolved } from './actions';
import { initAdaptServiceReducer } from '../adapt-service/reducers';



export type ICoreReducer = IReducer<CoreState>;

const navigationEndReducer: ICoreReducer = (
  action: NavigationEndAction, state: CoreState
): CoreState => {
  return { ...state, url: action.payload };
};

const updateIsUrlResolvedReducer: ICoreReducer = (
  action: UpdateIsUrlResolved, state: CoreState
): CoreState => {
  return { ...state, isUrlResolved: action.payload };
};

const updateIsAdapatedReducer: ICoreReducer = (
  action: UpdateIsAdaptedAction, state: CoreState
): CoreState => {
  return { ...state, isAdapted: action.payload };
};

const updateIsDebuggingReducer: ICoreReducer = (
  action: UpdateIsDebuggingAction, state: CoreState
): CoreState => {
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
  navigationEnd: navigationEndReducer,
  updateIsUrlResolved: updateIsUrlResolvedReducer,
  updateIsAdapted: updateIsAdapatedReducer,
  updateIsDebugging: updateIsDebuggingReducer,
  INIT_ADAPT_SERVICE: initAdaptServiceReducer,
};

