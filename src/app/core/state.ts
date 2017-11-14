import { ISliceConfiguration } from '../configuration';

export interface ICoreState {
  url: string|null;
}

export const initialCoreState: ICoreState = {
  url: null,
};

export const initialCoreConfiguration: ISliceConfiguration = {
  routes: [
    { pattern: '^$', viewName: 'homeView' }
  ],
  reducers: {
    'NAVIGATION_END': 'navigationEnd'
  }
};
