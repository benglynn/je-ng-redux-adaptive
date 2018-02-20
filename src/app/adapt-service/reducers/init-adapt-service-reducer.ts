import { CoreState } from '../../core/state/core-state';
import { RouteConfig } from '../../routing/route-config';
import { CoreReducerFunc } from '../../core/reducers/core-reducer-func';
import { Actionable } from '../../store/actionable';
import { Effect } from '../../core/effects/effect';

export const initAdaptServiceReducer: CoreReducerFunc = (
  action: Actionable, coreSlice: CoreState
): CoreState => {
  const newRoutes = coreSlice.routes.map((routeConfig: RouteConfig) => {
    return routeConfig.effect === Effect.loadRestaurantsEffect ?
      {...routeConfig, effect: Effect.newLoadRestaurantsEffect } : routeConfig;
  });
  return {...coreSlice, routes: newRoutes};
};
