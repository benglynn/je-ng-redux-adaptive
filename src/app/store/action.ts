export enum Action {
  initialAction = 'initialAction',
  navigationStartAction = 'navigationStartAction',
  navigationEndAction = 'navigationEndAction',
  updateIsAdaptedAction = 'updateIsAdaptedAction',
  updateIsUrlResolvedAction = 'updateIsUrlResolvedAction',
  updateIsDebuggingAction = 'updateIsDebuggingAction',
  updateAreaAction = 'updateAreaAction',
  visitAreaAction = 'visitAreaAction',
  loadRestaurantsAction = 'loadRestaurantsAction',
  updateRestaurnatsAction = 'updateRestaurnatsAction',
  removeRestaurantsAction = 'removeRestaurantsAction',
  updateRoutesAction = 'updateRoutesAction',
  // Adapters add actions below
  initAdaptServiceAction = 'initAdaptServiceAction',
  initAdaptRoutesAction = 'initAdaptRoutesAction',
  initAdaptResultsView = 'initAdaptResultsView',
}
