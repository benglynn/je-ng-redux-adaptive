import { CoreState } from '../core/state';
import { IAction } from '../app.reducers';
import { RouteConfig } from '../routing/route-config';
import { CoreReducerFunc } from '../core/reducers';
import { Actionable } from '../store';

export const initAdaptServiceReducer: CoreReducerFunc = (
  action: Actionable, coreSlice: CoreState
): CoreState => {
  const newRoutes = coreSlice.routes.map((routeConfig: RouteConfig) => {
    return routeConfig.effectName === 'loadRestaurantsEffect' ?
      {...routeConfig, effectName: 'newLoadRestaurantsEffect'} : routeConfig;
  });
  return {...coreSlice, routes: newRoutes};
};
