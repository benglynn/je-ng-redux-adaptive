import { Injectable } from '@angular/core';
import * as fromPostcode from '../postcode';
import { ActionX } from './action';

@Injectable()
export class Registry {
  get reducers() {
    return {
      'updatePostcode': (action: ActionX, state: fromPostcode.State) => {
        return action.payload;
      }
    }
  }
}
