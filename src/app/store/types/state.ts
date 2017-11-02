import * as fromPostcode from '../../postcode';
import * as fromConfiguration from '../../configuration';

export interface IAppStateX {
  postcode: fromPostcode.State;
  configuration: fromConfiguration.State;
}
