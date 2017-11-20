import {
  ICoreState, initialCoreState, ICoreConfiguration
  } from './core/state';
import {
  IAreaState, initialAreaState, IAreaConfiguration
  } from './area/state';
import {
  IRestaurantsState, initialRestaurantState, IRestaurantsConfiguration
  } from './restaurants/state';
import {
  IConfigurationState, initialConfigurationState, IConfigurationConfiguration
  } from './app.configuration';
import {
  IAction,
  IReducer, IReducers,
  IAllCoreReducers, allCoreReducers,
  IAllAreaReducers, allAreaReducers,
  IAllRestaurantsReducers, allRestaurantsReducers,
  IAllConfigurationReducers, allConfigurationReducers,
  } from './app.reducers';
  import { ISliceConfiguration } from './app.configuration';

export interface IAppState {
  core: ICoreState;
  area: IAreaState;
  restaurants: IRestaurantsState;
  configuration: IConfigurationState;
}

export type IAppStateKey = keyof IAppState;

export const initialState: IAppState = {
  core: initialCoreState,
  area: initialAreaState,
  restaurants: initialRestaurantState,
  configuration: initialConfigurationState
};

const stateReducers = {
  core: allCoreReducers,
  area: allAreaReducers,
  restaurants: allRestaurantsReducers,
  configuration: allConfigurationReducers,
};


interface NextSlice {
  slice: any;
  isNew: boolean;
}

export const getNextState = (action: IAction, state: IAppState): [IAppState, IAppStateKey[]] => {
  const changeList: IAppStateKey[] = [];
  const next = Object.entries(stateReducers)
    .reduce((prev, [name, reducers]) => {
      const nextSlice: NextSlice = getNextSlice(action, state[name], reducers, state.configuration[name]);
      if (nextSlice.isNew) { changeList.push(name as IAppStateKey); }
      return Object.assign(prev, { [name]: nextSlice.slice });
    }, {});
  return [next as IAppState, changeList];
};

const getNextSlice = (action, state, reducers, configuration): NextSlice => {
  const unchanged = { slice: state, isNew: false };
  if (Object.keys(reducers).length === 0) { return unchanged; }
  const reducer = Object.entries(configuration.reducers)
    .filter(([actionType, reducerFnName]) => actionType === action.type)
    .map(([actionType, reducerFnName]) => reducers[reducerFnName])[0];
  if (reducer === undefined) { return unchanged; }
  return { slice: reducer(action, state), isNew: true };
};
