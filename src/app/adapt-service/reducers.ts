import { ICoreState } from '../core/state';
import { IAction } from '../app.reducers';
import { ICoreReducer } from '../core/reducers';
import { IRouteConfig } from '../app.configuration';

export const initAdaptService: ICoreReducer = ( action: IAction, coreSlice: ICoreState
): ICoreState => {
  const newRoutes = coreSlice.routes.map((routeConfig: IRouteConfig) => {
    return routeConfig.effectName === 'loadRestaurantsEffect' ?
      {...routeConfig, effectName: 'newLoadRestaurantsEffect'} : routeConfig;
  });
  return {...coreSlice, routes: newRoutes};
};
