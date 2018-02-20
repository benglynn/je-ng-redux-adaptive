import { IRestaurantsConfiguration, initialRestaurantsConfiguration } from './restaurants/state';

export interface IConfigurationState {
  restaurants: IRestaurantsConfiguration;
}

export const initialConfigurationState: IConfigurationState = {
  restaurants: initialRestaurantsConfiguration,
};
