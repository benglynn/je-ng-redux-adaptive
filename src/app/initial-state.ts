import * as fromPostcode from './area';
import * as fromRestaurants from './restaurants';
import * as fromConfiguration from './configuration';
import { IAppState } from './state';

export const initialState: IAppState = {
  core: null,
  area: fromPostcode.initialAreaState,
  restaurants: fromRestaurants.initialRestaurantState,
  configuration: fromConfiguration.initialConfigurationState
};
