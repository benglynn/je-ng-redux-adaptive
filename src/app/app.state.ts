import { CoreState, initialCoreState, ICoreConfiguration } from './core/state';
import { coreReducers } from './core/reducers';
import { AreaState, initialAreaState, IAreaConfiguration } from './area/state';
import { areaReducers } from './area/reducers';
import { RestaurantsState, initialRestaurantsState, IRestaurantsConfiguration
} from './restaurants/state';
import { restaurantsReducers } from './restaurants/reducers';
import { IConfigurationState, initialConfigurationState, IConfigurationConfiguration
} from './app.configuration';
import { IAction } from './app.reducers';

export interface IAppState {
  core: CoreState;
  area: AreaState;
  restaurants: RestaurantsState;
  configuration: IConfigurationState;
}

export type IAppStateKey = keyof IAppState;

export const initialState: IAppState = {
  core: initialCoreState,
  area: initialAreaState,
  restaurants: initialRestaurantsState,
  configuration: initialConfigurationState
};

export const stateReducers = {
  core: coreReducers,
  area: areaReducers,
  restaurants: restaurantsReducers,
  configuration: {},
};
