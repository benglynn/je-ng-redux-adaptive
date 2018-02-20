import { CoreState } from '../core/state/core-state';
import { AreaState } from '../area/state/area-state';
import { RestaurantsState } from '../restaurants/state/restaurants-state';

export interface State {
  core: CoreState;
  area: AreaState;
  restaurants: RestaurantsState;
}
