import { IRouteConfig } from '../app.configuration';
import { IAllAreaReducerName } from '../app.reducers';
import { UPDATE_AREA } from './actions';

export const areaPattern = /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

export type IAreaState = string|null;

export const initialAreaState: IAreaState = null;

export interface IAreaConfiguration {
  reducers: {
    UPDATE_AREA: IAllAreaReducerName;
  };
  routes: {
    area: IRouteConfig;
  };
}

export const initialAreaConfiguration: IAreaConfiguration = {
  reducers: {
    UPDATE_AREA: 'updateArea',
  },
  routes: {
    area: {
      pattern: '^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$',
      viewName: 'areaView',
      effectName: 'loadRestaurantsEffect'
    }
  }
};
