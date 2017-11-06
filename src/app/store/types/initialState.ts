import { IAppState } from './state';
import * as fromPostcode from '../../postcode';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export const initialState: IAppState = {
  postcode: fromPostcode.initialState,
  restaurants: fromRestaurants.initialState,
  configuration: fromConfiguration.initialState
};
