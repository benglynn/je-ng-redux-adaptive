import { CoreState } from '../core/state';
import { AreaState } from '../area/state';
import { RestaurantsState } from '../restaurants/state';
import { IConfigurationState } from '../app.configuration';

export interface State {
  core: CoreState;
  area: AreaState;
  restaurants: RestaurantsState;
  configuration: IConfigurationState;
}
