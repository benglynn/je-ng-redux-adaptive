import { CoreState } from '../core/state';
import { IAction } from '../app.reducers';
import { IRouteConfig } from '../app.configuration';
import { CoreReducerFunc } from '../core/reducers';

export const initAdaptRoutesReducer: CoreReducerFunc = (action: IAction, state: CoreState
): CoreState => {
  state.routes = state.routes.concat({ pattern: '^new$', viewName: 'newView' });
  return state;
};
