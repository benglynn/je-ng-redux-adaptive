import { Injectable } from '@angular/core';
import * as fromPostcode from '../postcode';
import { IActionX, IReducersX } from './types';

@Injectable()
export class Registry {

  get reducers(): IReducersX {
    return {
      'updatePostcode': (action: IActionX, state: fromPostcode.State) => {
        return action.payload;
      }
    }
  }
}
