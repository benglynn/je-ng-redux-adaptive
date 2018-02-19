import { ReducerFunc } from '../store';
import { initAdaptServiceReducer } from '../adapt-service/reducers';
import { Actionable } from '../store';
import { initAdaptRoutesReducer } from '../adapt-routes/reducers';

export type CoreReducerFunc = ReducerFunc<CoreState>;

export enum CoreReducer {
  navigationEndReducer = 'navigationEndReducer',
  updateIsUrlResolvedReducer = 'updateIsUrlResolvedReducer',
  updateIsAdaptedReducer = 'updateIsAdaptedReducer',
  // Adapters add core reducers below
  initAdaptServiceReducer = 'initAdaptServiceReducer',
  initAdaptRoutesReducer = 'initAdaptRoutesReducer',
}

export const coreReducerAsFunc = (coreReducer: CoreReducer): ReducerFunc<CoreState> => {
  switch (coreReducer) {
    case CoreReducer.navigationEndReducer:
    return navigationEndReducer;
    case CoreReducer.updateIsAdaptedReducer:
    return updateIsAdapatedReducer;
    case CoreReducer.updateIsUrlResolvedReducer:
    return updateIsUrlResolvedReducer;
    case CoreReducer.initAdaptServiceReducer:
    return initAdaptServiceReducer;
    case CoreReducer.initAdaptRoutesReducer:
    return initAdaptRoutesReducer;
  }
  return noCaseFor(coreReducer);
};
function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }


// TODO: move the following to separate files



const navigationEndReducer: CoreReducerFunc = (
  action: NavigationEndAction, state: CoreState
): CoreState => {
  return { ...state, url: action.payload };
};

const updateIsAdapatedReducer: CoreReducerFunc = (
  action: UpdateIsAdaptedAction, state: CoreState
): CoreState => {
  return { ...state, isAdapted: action.payload };
};

const updateIsUrlResolvedReducer: CoreReducerFunc = (
  action: UpdateIsUrlResolvedAction, state: CoreState
): CoreState => {
  return { ...state, isUrlResolved: action.payload };
};



/* Deprecated below *//////////////////////////////////////////////////////////


import { IReducer } from '../app.reducers';
import { NavigationEndAction } from '../routing/actions';
import { CoreState } from './state';
import { UpdateIsAdaptedAction, UpdateIsDebuggingAction, UpdateIsUrlResolvedAction } from './actions';



export type ICoreReducer = IReducer<CoreState>;

const navigationEndReducerOld: ICoreReducer = (
  action: NavigationEndAction, state: CoreState
): CoreState => {
  return { ...state, url: action.payload };
};

const updateIsUrlResolvedReducerOld: ICoreReducer = (
  action: UpdateIsUrlResolvedAction, state: CoreState
): CoreState => {
  return { ...state, isUrlResolved: action.payload };
};

const updateIsAdapatedReducerOld: ICoreReducer = (
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
}

export type ICoreReducerName = keyof ICoreReducers;

export const coreReducers: ICoreReducers = {
  navigationEnd: navigationEndReducerOld,
  updateIsUrlResolved: updateIsUrlResolvedReducerOld,
  updateIsAdapted: updateIsAdapatedReducerOld,
  updateIsDebugging: updateIsDebuggingReducer,
};

