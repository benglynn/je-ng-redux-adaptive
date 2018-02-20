import { State } from './state';
import { initialCoreState } from '../core/state/initial-core-state';
import { initialAreaState } from '../area/state/initial-area-state';
import { initialRestaurantsState } from '../restaurants/state/initial-restaurants-state';

export const initialState: State = {
  core: initialCoreState,
  area: initialAreaState,
  restaurants: initialRestaurantsState,
};
