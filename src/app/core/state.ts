import { IRouteConfig } from '../app.configuration';
import { ICoreEffectName } from './effects';
import { CoreReducer, coreReducerAsFunc } from './reducers';
import { Actionable, ReducerFunc, Reducible } from '../store';

export interface CoreState extends Reducible<CoreReducer> {
  url: string|null;
  isUrlResolved: boolean;
  isAdapted: boolean;
  isDebugging: boolean;
  routes: IRouteConfig[];
}

type ReduceStateSlice<StateSlice> = (
  currentState: StateSlice, action: Actionable
) => StateSlice;

export const reduceCoreState: ReduceStateSlice<CoreState> = (
  currentState: CoreState, action: Actionable
): CoreState => { // TODO: null if no change
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? currentState : coreReducerAsFunc(reducer)(
    action, currentState);
};

export const initialCoreState: CoreState = {
  url: null,
  isUrlResolved: false,
  isAdapted: false,
  isDebugging: false,
  routes: [
    {
      viewName: 'homeView',
      pattern: '^$'
    }, {
      viewName: 'areaView',
      pattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      effectName: 'loadRestaurantsEffect'
    }
  ],
  reducers: {
    navigationEndAction: CoreReducer.navigationEndReducer,
    updateIsUrlResolvedAction: CoreReducer.updateIsUrlResolvedReducer,
    updateIsAdaptedAction: CoreReducer.updateIsAdaptedReducer,
    initAdaptServiceAction: CoreReducer.initAdaptServiceReducer,
  }
};

/* Deprecated below *//////////////////////////////////////////////////////////

export interface ICoreConfiguration {
  reducers: {
    NAVIGATION_END: string;
    UPDATE_IS_ADAPTED: string;
    UPDATE_IS_DEBUGGING: string;
    UPDATE_IS_URL_RESOLVED: string;
  };
  effects: {
    UPDATE_AREA: ICoreEffectName;
  };
}

export const initialCoreConfiguration: ICoreConfiguration = {
  reducers: {
    NAVIGATION_END: 'navigationEnd',
    UPDATE_IS_URL_RESOLVED: 'updateIsUrlResolved',
    UPDATE_IS_ADAPTED: 'updateIsAdapted',
    UPDATE_IS_DEBUGGING: 'updateIsDebugging',
  },
  effects: {
    UPDATE_AREA: 'logPostcodeEffect'
  }
};
