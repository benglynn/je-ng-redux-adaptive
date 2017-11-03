import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../postcode';
import { IActionX, IReducerX, IReducersX, IEffectX, IEffectsX } from './types';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class Registry {

  private _reducers: IReducersX = {}; // TODO: behaviorSubject.concat() better?
  private _effects: IEffectsX = {}; // dito

  get reducers(): IReducersX {
    return this._reducers;
  }

  get effects(): IEffectsX {
    return this._effects;
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

  registerEffect(name: string, effect: IEffectX) {
    if (this._effects[name] !== undefined) {
      throw new Error(`effect named '${name}' already registered`);
    }
    this._effects = Object.assign(this._effects, {[name]: effect});
  }

  registerEffects(effects: IEffectsX) {
    Object.keys(effects).map(name =>
      this.registerEffect(name, effects[name])
    );
  }
}
