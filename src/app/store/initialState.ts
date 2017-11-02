import * as fromPostcode from '../postcode';
import * as fromConfiguration from '../configuration';

export const initialStateX = {
  postcode: fromPostcode.initialState,
  configuration: fromConfiguration.initialState
}
