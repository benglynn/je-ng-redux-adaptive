import { stateReducers, IAppState, IAppStateKey } from '../app.state';
import { IAction } from '../app.reducers';

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
  return { slice: reducer(action, { ...state }), isNew: true };
};
