import { ICoreConfiguration, initialCoreConfiguration } from './core/state';
import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';
import { IEffectName } from './app.effects';

export interface IConfigurationState {
  core: ICoreConfiguration;
  restaurants: IRestaurantsConfiguration;
}

export const initialConfigurationState: IConfigurationState = {
  core: initialCoreConfiguration,
  restaurants: initialRestaurantsConfiguration,
};

interface IStringHash {
  [name: string]: string;
}

interface IEffects {
  [name: string]: IEffectName;
}
