import { IAppState } from '../../state';
import * as fromCore from '../../core';
import * as fromPostcode from '../../area';
import * as fromRestaurants from '../../restaurants';
import * as fromConfiguration from '../../configuration';

export const initialState: IAppState = {
  core: fromCore.initialCoreState,
  area: fromPostcode.initialAreaState,
  restaurants: fromRestaurants.initialRestaurantState,
  configuration: fromConfiguration.initialConfigurationState
};
