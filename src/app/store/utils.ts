import { IAppStateX, IActionX, IReducersX } from './types';

export function nextSlices(state: IAppStateX, action: IActionX, reducers: IReducersX
): any[] {
// TODO: memoize lookup
// TODO: abstract from this and effect lookup (which becomes per slice too)
return Object.keys(state).map((sliceName): any => {
  const stateSlice = state[sliceName];
  const sliceReducers = state.configuration.reducers[sliceName];
  if (sliceReducers === undefined) {
    return undefined;
  }
  const reducerName = sliceReducers[action.type];
  if (reducerName === undefined) {
    return undefined;
  }
  const reducerFunction = reducers[reducerName];
  if (reducerFunction === undefined) {
    throw new Error(`expected reducer named '${reducerName}'`);
  }
  return reducerFunction(action, stateSlice);
});
}

export function toMergedObject(names: string[], oldObject: Object, newValues: any[]) {
return newValues.reduce(
  (accumulator: Object, current: Object|undefined, index: number) => {
    const name = names[index];
    const slice = {[name]: current || oldObject[name]};
    return Object.assign(accumulator, slice);
  }, {});
}