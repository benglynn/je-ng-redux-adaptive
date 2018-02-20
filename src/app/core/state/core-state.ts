import { Reducible } from '../../store/reducible';
import { CoreReducer } from '../reducers/core-reducer';
import { RouteConfig } from '../../presentation/route-config';
import { Action } from '../../store/action';
import { Effect } from '../effects/effect';
import { View } from '../../presentation/view';

export interface CoreState extends Reducible<CoreReducer> {
  url: string|null;
  isUrlResolved: boolean;
  isAdapted: boolean;
  isDebugging: boolean;
  routes: RouteConfig[];
  views: {
    resultView: View;
  };
  effects: { [_ in Action]?: Effect };
}
