import { Injectable } from '@angular/core';
import * as fromPostcode from '../postcode';
import { IActionX, IReducerX, IReducersX } from './types';

@Injectable()
export class Registry {

  private _reducers: IReducersX = {}; // TODO: make immutable somehow

  get reducers(): IReducersX {
    return this._reducers
  }

  registerReducer<T>(name: string, reducer: IReducerX<T>) {
    // TODO: manage collisions
    this._reducers = Object.assign(this._reducers, {[name]: reducer});
  }

  constructor() {
    this.registerReducer('updatePostcode',
      (action: IActionX, state: fromPostcode.State) => {
        return action.payload;
      }
    )
  }
}
