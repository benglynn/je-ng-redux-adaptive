import { IRouteConfig } from '../app.configuration';
import { UPDATE_AREA } from './actions';

export const areaPattern = /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

export type PostcodeOrNull = string|null;

export interface IAreaState {
  postcode: string|null;
}

export const initialAreaState: IAreaState = {
  postcode: null
};



/* Deprecated below *//////////////////////////////////////////////////////////

export interface IAreaConfiguration {
  reducers: {
    UPDATE_AREA: String;
  };
}


export const initialAreaConfiguration: IAreaConfiguration = {
  reducers: {
    UPDATE_AREA: 'updateArea',
  }
};
