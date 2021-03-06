import { CoreState } from './core-state';
import { CoreReducer } from '../reducers/core-reducer';
import { Effect } from '../effects/effect';
import { View } from '../../presentation/view';

export const initialCoreState: CoreState = {
  url: null,
  isUrlResolved: false,
  isAdapted: false,
  isDebugging: false,
  routes: [
    {
      view: View.homeView,
      pattern: '^$'
    }, {
      view: View.areaView,
      pattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      effect: Effect.loadRestaurantsEffect
    }
  ],
  views: {
    resultView: View.resultView
  },
  reducers: {
    navigationEndAction: CoreReducer.navigationEndReducer,
    updateIsUrlResolvedAction: CoreReducer.updateIsUrlResolvedReducer,
    updateIsAdaptedAction: CoreReducer.updateIsAdaptedReducer,
    initAdaptServiceAction: CoreReducer.initAdaptServiceReducer,
    initAdaptRoutesAction: CoreReducer.initAdaptRoutesReducer,
    initAdaptResultsViewAction: CoreReducer.initAdaptResultViewReducer,
  },
  effects: {
    updateAreaAction: Effect.logPostcodeEffect,
  }
};
