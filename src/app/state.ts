import * as fromPostcode from './area';
import * as fromRestaurants from './restaurants';
import * as fromConfiguration from './configuration';

export interface IAppState {
  core: null;
  area: fromPostcode.IAreaState;
  restaurants: fromRestaurants.IRestaurantsState;
  configuration: fromConfiguration.IConfigurationState;
}
