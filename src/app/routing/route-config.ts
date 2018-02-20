import { IViewName } from '../app.views';
import { Effect } from '../core/effects/effect';

export interface RouteConfig {
  pattern: string;
  viewName: IViewName;
  effect?: Effect;
}
