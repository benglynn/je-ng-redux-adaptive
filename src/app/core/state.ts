import { ISliceConfiguration } from '../configuration';

export const initialCoreConfiguration: ISliceConfiguration = {
  containerViews: {
    '': 'home',
    ':area': 'area',
    ':area/:restaurant': 'restauarnt',
    '**': 'error',
  }
};

