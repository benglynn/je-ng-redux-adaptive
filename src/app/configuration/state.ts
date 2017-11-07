import { initialAreaConfiguration } from '../area';
import { initialRestaurantsConfiguration } from '../restaurants';


interface IStringHash {
  [name: string]: string;
}

interface IStringHashes {
  [name: string]: IStringHash;
}

export interface ISliceConfiguration {
  reducers?: IStringHash;
  effects?: IStringHash;
  containerViews?: IStringHash;
  views?: IStringHash;
}

export interface IConfigurationState {
  area: ISliceConfiguration;
  restaurants: ISliceConfiguration;
}

export const initialState: IConfigurationState = {
  area: initialAreaConfiguration,
  restaurants: initialRestaurantsConfiguration
};
