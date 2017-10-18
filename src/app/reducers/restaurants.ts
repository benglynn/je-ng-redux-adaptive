import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

export enum Status { Loading, Okay, Error }

export interface State {
  status: null | Status;
  data: null | Restaurant[];
}

export const initialState: State = { status: null, data: null };

const UPDATE_RESTAURANTS = '[Restaurant] update restaurants';
const REMOVE_RESTAURANTS = '[Restaurant] remove restaurants';
const UPDATE_STATUS = '[Restaurant] update status';

export class UpdateRestaurants implements Action {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: Restaurant[]) {}
}

export class RemoveRestaurants implements Action {
  readonly type = REMOVE_RESTAURANTS;
}

export class UpdateStatus implements Action {
  readonly type = UPDATE_STATUS;
  constructor(public payload: Status) {}
}

export type Actions = UpdateRestaurants | RemoveRestaurants | UpdateStatus;

export function reducer (state = initialState, action: Actions): State {
  switch (action.type) {

    case UPDATE_RESTAURANTS: {
      return { status: Status.Okay, data: action.payload};
    }

    case REMOVE_RESTAURANTS: {
      return { status: null, data: null };
    }

    case UPDATE_STATUS: {
      return Object.assign({}, state, {status: action.payload});
    }

    default: {
      return state;
    }

  }
}
