import { RouteConfig } from '../routing/route-config';
import { ICoreEffectName } from './effects';
import { CoreReducer, coreReducerAsFunc } from './reducers';
import { Actionable, ReducerFunc, Reducible, ReduceStateSlice } from '../store';

export interface CoreState extends Reducible<CoreReducer> {
  url: string|null;
  isUrlResolved: boolean;
  isAdapted: boolean;
  isDebugging: boolean;
  routes: RouteConfig[];
}

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
    initAdaptRoutesAction: CoreReducer.initAdaptRoutesReducer,
  }
};

export const reduceCoreStateOrNull: ReduceStateSlice<CoreState> = (
  currentState: CoreState, action: Actionable
): CoreState|null => {
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? null : coreReducerAsFunc(reducer)(
    action, currentState);
};

/* Deprecated below *//////////////////////////////////////////////////////////

export const initialCoreConfiguration: ICoreConfiguration = {
  effects: {
    UPDATE_AREA: 'logPostcodeEffect'
  }
};

export interface ICoreConfiguration {
  effects: {
    UPDATE_AREA: ICoreEffectName;
  };
}
