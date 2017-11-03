import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../postcode';
import { IActionX, IReducerX, IReducersX, IEffectsX } from './types';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class Registry {

  private _reducers: IReducersX = {}; // TODO: behaviorSubject.concat() better?

  get reducers(): IReducersX {
    return this._reducers
  }

  effects: IEffectsX = {
    'loadRestaurants': (action: IActionX, injector: Injector) => {
      const restaurantsService = injector.get(RestaurantService);
      console.group('effect');
      console.log(action);
      console.groupEnd();
    }
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
