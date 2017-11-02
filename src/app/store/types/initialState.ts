import { IAppStateX } from './state';
import * as fromPostcode from '../../postcode';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export const initialStateX: IAppStateX = {
  postcode: fromPostcode.initialState,
  restaurants: fromRestaurants.initialState,
  configuration: fromConfiguration.initialState
}
