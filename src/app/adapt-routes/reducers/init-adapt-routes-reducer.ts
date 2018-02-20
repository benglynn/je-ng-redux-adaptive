import { Actionable } from '../../store/actionable';
import { CoreState } from '../../core/state/core-state';
import { RouteConfig } from '../../routing/route-config';
import { CoreReducerFunc } from '../../core/reducers/core-reducer-func';

export const initAdaptRoutesReducer: CoreReducerFunc = (action: Actionable, state: CoreState
): CoreState => {
  const newroutes = state.routes.concat({ pattern: '^new$', viewName: 'newView' });
  return {...state, routes: newroutes};
};
