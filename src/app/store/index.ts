export enum Action {
  initialAction = 'initialAction',
  navigationStartAction = 'navigationStartAction',
  navigationEndAction = 'navigationEndAction',
  updateIsAdaptedAction = 'updateIsAdaptedAction',
  updateIsUrlResolvedAction = 'updateIsUrlResolvedAction',
  updateIsDebuggingAction = 'updateIsDebuggingAction',
  initAdaptServiceAction = 'initAdaptServiceAction',
  updateAreaAction = 'updateAreaAction',
  visitAreaAction = 'visitAreaAction',
  loadRestaurantsAction = 'loadRestaurantsAction',
  updateRestaurnatsAction = 'updateRestaurnatsAction',
  removeRestaurantsAction = 'removeRestaurantsAction',
  updateRoutesAction = 'updateRoutesAction',
  // Adapters add actions below
}

export interface Actionable {
  actionType: Action;
}

export type ReducerFunc<StateSlice> = (action: Actionable, stateSlice: StateSlice) => StateSlice;

export interface Reducible<SliceReducer> {
  reducers: {[_ in Action]?: SliceReducer};
}

export type ReduceStateSlice<StateSlice> = (
  currentState: StateSlice, action: Actionable
) => StateSlice;
