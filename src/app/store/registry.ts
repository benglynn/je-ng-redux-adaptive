import { Injectable } from '@angular/core';
import * as fromPostcode from '../postcode';
import { IActionX, IReducerX, IReducersX } from './types';

@Injectable()
export class Registry {

  private _reducers: IReducersX = {}; // TODO: behaviorSubject.concat() better?

  get reducers(): IReducersX {
    return this._reducers
  }

  registerReducer<T>(name: string, reducer: IReducerX<T>) {
    if (this._reducers[name] !== undefined) {
      throw new Error(`reducer named '${name}' already registered`);
    }
    this._reducers = Object.assign(this._reducers, {[name]: reducer});
  }

  registerReducers(reducers: IReducersX) {
    Object.keys(reducers).map(name =>
      this.registerReducer(name, reducers[name])
    );
    console.group('updated reducers');
    console.log(this._reducers);
    console.groupEnd();
  }
}
