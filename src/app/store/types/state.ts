import * as fromPostcode from '../../postcode';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export interface IAppStateX {
  postcode: fromPostcode.State;
  restaurants: fromRestaurants.State;
  configuration: fromConfiguration.State;
}
