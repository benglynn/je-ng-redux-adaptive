import { View } from '../presentation/view';
import { Effect } from '../core/effects/effect';

export interface RouteConfig {
  pattern: string;
  view: View;
  effect?: Effect;
}
