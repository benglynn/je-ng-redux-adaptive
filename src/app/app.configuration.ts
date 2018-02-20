import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';
import { IEffectName } from './app.effects';

export interface IConfigurationState {
  restaurants: IRestaurantsConfiguration;
}

export const initialConfigurationState: IConfigurationState = {
  restaurants: initialRestaurantsConfiguration,
};

interface IEffects {
  [name: string]: IEffectName;
}
