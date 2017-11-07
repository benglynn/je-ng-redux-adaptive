import * as fromPostcode from '../../area';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export interface IAppState {
  area: fromPostcode.IAreaState;
  restaurants: fromRestaurants.IRestaurantsState;
  configuration: fromConfiguration.IConfigurationState;
}
