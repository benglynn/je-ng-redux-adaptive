import { IRouteConfig } from '../app.configuration';
import { UPDATE_AREA } from './actions';
import { AreaReducer, areaReducerAsFunc } from './reducers';
import { Actionable, ReducerFunc, Reducible, ReduceStateSlice } from '../store';

export const areaPattern = /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

export type PostcodeOrNull = string|null;

export interface AreaState extends Reducible<AreaReducer> {
  postcode: PostcodeOrNull;
}

export const initialAreaState: AreaState = {
  postcode: null,
  reducers: {
    updateAreaAction: AreaReducer.updateAreaReducer,
  }
};

export const reduceAreaState: ReduceStateSlice<AreaState> = (
  currentState: AreaState, action: Actionable
): AreaState => { // TODO: null if no change
  const reducer = currentState.reducers[action.actionType];
  return reducer === undefined ? currentState : areaReducerAsFunc(reducer)(
    action, currentState);
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
