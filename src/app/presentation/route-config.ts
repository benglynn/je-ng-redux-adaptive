import { IViewName } from '../app.views';
import { View } from '../presentation/view';
import { Effect } from '../core/effects/effect';

export interface RouteConfig {
  pattern: string;
  viewName: IViewName; // deprecated
  view: View;
  effect?: Effect;
}
