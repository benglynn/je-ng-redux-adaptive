import { Reducible } from '../../store/reducible';
import { CoreReducer } from '../reducers/core-reducer';
import { RouteConfig } from '../../routing/route-config';
import { Action } from '../../store/action';
import { Effect } from '../effects/effect';

export interface CoreState extends Reducible<CoreReducer> {
  url: string|null;
  isUrlResolved: boolean;
  isAdapted: boolean;
  isDebugging: boolean;
  routes: RouteConfig[];
  effects: { [_ in Action]?: Effect };
}
