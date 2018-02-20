import { RouteConfig } from '../routing/route-config';
import { ICoreEffectName } from './effects';
import { CoreReducer } from './reducers/core-reducer';
import { coreReducerCall } from './reducers/core-reducer-call';
import { Actionable } from '../store/actionable';
import { ReducerFunc } from '../store/reducer-func';
import { Reducible } from '../store/reducible';
import { ReduceStateSlice } from '../store/reduce-state-slice';

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
  return reducer === undefined ? null : coreReducerCall(reducer)(
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
