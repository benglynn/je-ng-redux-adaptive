import { ISliceConfiguration } from '../configuration';

export const areaPattern = /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

export type IAreaState = string|null;

export const initialAreaState = null;

export const initialAreaConfiguration: ISliceConfiguration = {
  reducers: {
    'UPDATE_AREA': 'updateArea',
  },
  routes: [
    {
      pattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      viewName: 'areaView',
      guardName: 'areaRouteGuard'
    }
  ]
};
