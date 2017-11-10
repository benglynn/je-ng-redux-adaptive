import { ISliceConfiguration } from '../configuration';

export const initialCoreConfiguration: ISliceConfiguration = {
  routes: [
    { pattern: '^$', viewName: 'homeView' }
  ]
};

