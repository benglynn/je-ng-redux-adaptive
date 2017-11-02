import { IActionX } from '../store/types';
import { State } from './state';

export const UPDATE_POSTCODE = 'UPDATE_POSTCODE';

export class UpdatePostcode implements IActionX {
  readonly type = UPDATE_POSTCODE;
  constructor(public payload: State) {}
}
