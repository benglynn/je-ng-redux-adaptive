import { IAppState } from './state';
import * as fromPostcode from '../../area';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export const initialState: IAppState = {
  area: fromPostcode.initialAreaState,
  restaurants: fromRestaurants.initialState,
  configuration: fromConfiguration.initialState
};
