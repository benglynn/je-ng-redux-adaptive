import { ReducerFunc } from '../store/reducer-func';
import { initAdaptServiceReducer } from '../adapt-service/reducers';
import { Actionable } from '../store/actionable';
import { initAdaptRoutesReducer } from '../adapt-routes/reducers';
import { UpdateIsAdaptedAction, UpdateIsDebuggingAction, UpdateIsUrlResolvedAction } from './actions';
import { NavigationEndAction } from '../routing/actions';
import { CoreState } from './state';

export enum CoreReducer {
  navigationEndReducer = 'navigationEndReducer',
  updateIsUrlResolvedReducer = 'updateIsUrlResolvedReducer',
  updateIsAdaptedReducer = 'updateIsAdaptedReducer',
  // Adapters add core reducers below
  initAdaptServiceReducer = 'initAdaptServiceReducer',
  initAdaptRoutesReducer = 'initAdaptRoutesReducer',
}

export type CoreReducerFunc = ReducerFunc<CoreState>;

export const coreReducerAsFunc = (coreReducer: CoreReducer): CoreReducerFunc => {
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

