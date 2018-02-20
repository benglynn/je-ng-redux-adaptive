import { Actionable } from '../../store/actionable';
import { CoreState } from '../../core/state/core-state';
import { RouteConfig } from '../../presentation/route-config';
import { CoreReducerFunc } from '../../core/reducers/core-reducer-func';
import { View } from '../../presentation/view';

export const initAdaptRoutesReducer: CoreReducerFunc = (action: Actionable, state: CoreState
): CoreState => {
  const newroutes = state.routes.concat({ pattern: '^new$', viewName: 'newView', view: View.newView });
  return {...state, routes: newroutes};
};
