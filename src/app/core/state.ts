import { ISliceConfiguration } from '../configuration';

export interface ICoreState {
  url: string|null;
  status: number|null;
}

export const initialCoreState: ICoreState = {
  url: null,
  status: null
};

export const initialCoreConfiguration: ISliceConfiguration = {
  routes: [
    { pattern: '^$', viewName: 'homeView' }
  ]
};

