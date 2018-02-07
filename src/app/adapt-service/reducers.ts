import { CoreState } from '../core/state';
import { IAction } from '../app.reducers';
import { ICoreReducer } from '../core/reducers';
import { IRouteConfig } from '../app.configuration';
import { CoreReducerFunc } from '../core/reducers';
import { Actionable } from '../store';

export const initAdaptServiceReducer: CoreReducerFunc = (
  action: Actionable, coreSlice: CoreState
): CoreState => {
  const newRoutes = coreSlice.routes.map((routeConfig: IRouteConfig) => {
    return routeConfig.effectName === 'loadRestaurantsEffect' ?
      {...routeConfig, effectName: 'newLoadRestaurantsEffect'} : routeConfig;
  });
  return {...coreSlice, routes: newRoutes};
};

export const initAdaptServiceReducerOld: ICoreReducer = ( action: IAction, coreSlice: CoreState
): CoreState => {
  const newRoutes = coreSlice.routes.map((routeConfig: IRouteConfig) => {
    return routeConfig.effectName === 'loadRestaurantsEffect' ?
      {...routeConfig, effectName: 'newLoadRestaurantsEffect'} : routeConfig;
  });
  return {...coreSlice, routes: newRoutes};
};
