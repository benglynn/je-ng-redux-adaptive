import { CoreState, initialCoreState, ICoreConfiguration } from './core/state';
import { AreaState, initialAreaState } from './area/state';
import { RestaurantsState, initialRestaurantsState, IRestaurantsConfiguration
} from './restaurants/state';
import { IConfigurationState, initialConfigurationState
} from './app.configuration';

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
