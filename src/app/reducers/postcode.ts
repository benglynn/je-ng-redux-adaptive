import { Action } from '@ngrx/store';


export const postcodePattern =
  /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

// State

export type State = string | null;
export const initialState: State = null;

// Actiona

const UPDATE = '[Postcode] update';
const REMOVE = '[Postcode] remove';

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: State) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
}

// Reducer

export type Actions = Update | Remove;


export function reducer (
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case UPDATE: {
      return action.payload;
    }
    case REMOVE: {
      return initialState;
    }
    default: {
      return state;
    }

  }
}

