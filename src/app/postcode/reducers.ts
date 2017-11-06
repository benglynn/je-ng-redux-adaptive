import { IReducers } from '../store/types';
import { UpdatePostcode } from './actions';
import { State } from './state';

export function updatePostcode(action: UpdatePostcode, state: State) {
  return action.payload;
}

export const reducers: IReducers = {
  'updatePostcode': updatePostcode
}

