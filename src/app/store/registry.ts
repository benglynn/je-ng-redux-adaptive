import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../area';
import { IAction, IReducer, IReducers, IEffect, IEffects, IView, IViews } from './types';
import { RestaurantsService } from '../restaurants';

@Injectable()
export class Registry {

  private _reducers: IReducers = {}; // TODO: behaviorSubject.concat() better?
  private _effects: IEffects = {}; // ditto
  private _views: IViews = {}; // ditto

  get reducers(): IReducers {
    return this._reducers;
  }

  get effects(): IEffects {
    return this._effects;
  }

  get views(): IViews {
    return this._views;
  }

  registerReducer<T>(name: string, reducer: IReducer<T>) {
    if (this._reducers[name] !== undefined) {
      throw new Error(`reducer named '${name}' already registered`);
    }
    this._reducers = Object.assign(this._reducers, {[name]: reducer});
  }

  registerReducers(reducers: IReducers) {
    Object.keys(reducers).map(name =>
      this.registerReducer(name, reducers[name])
    );
  }

  registerEffect(name: string, effect: IEffect) {
    if (this._effects[name] !== undefined) {
      throw new Error(`effect named '${name}' already registered`);
    }
    this._effects = Object.assign(this._effects, {[name]: effect});
  }

  registerEffects(effects: IEffects) {
    Object.keys(effects).map(name =>
      this.registerEffect(name, effects[name])
    );
  }

  registerView(name: string, view: IView) {
    if (this._views[name] !== undefined) {
      throw new Error(`view named ${name} already registered`);
    }
    this._views = Object.assign(this._views, {[name]: view});
  }

  registerViews(views: IViews) {
    Object.keys(views).map(name =>
      this.registerView(name, views[name])
    );
  }

}
