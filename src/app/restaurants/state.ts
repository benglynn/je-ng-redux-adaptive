import { Restaurant } from '../restaurant';

export enum Status { Loading, Okay, Error }

export interface State {
  status: null | Status;
  data: null | Restaurant[];
}

export const initialState: State = { status: null, data: null };
