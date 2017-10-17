import { Action } from '@ngrx/store';

const UPDATE = '[Postcode] update';
const REMOVE = '[Postcode] remove';

export interface State {
  name: string | null;
  title: string | null;
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: State) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
}

export type Actions = Update | Remove;

export const initialState: State = { name: null, title: null };

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

  }
}

