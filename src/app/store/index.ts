export enum Action {
  navigationEndAction = 'navigationEndAction',
  initialAction = 'initialAction',
  updateIsAdaptedAction = 'updateIsAdaptedAction',
  updateIsUrlResolvedAction = 'updateIsUrlResolvedAction',
  // Adapters add actions below
}

export interface Actionable {
  type: Action;
}

export type ReducerFunc<StateSlice> = (action: Actionable, stateSlice: StateSlice) => StateSlice;

type ActionName = keyof Action;

export interface Reducible<SliceReducer> {
  reducers: {[_ in Action]?: SliceReducer};
  // reduce: (action: Actionable) => StateSlice;
}


