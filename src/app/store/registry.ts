import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../area';
import { IAction, IReducer, IReducers, IEffect, IEffects, IView, IViews,
  IGuard, IGuards } from './types';
import { RestaurantsService } from '../restaurants';

@Injectable()
export class Registry {

  reducers: IReducers = {}; // TODO: behaviorSubject.concat() better?
  effects: IEffects = {};
  private views: IViews = {};
  private guards: IGuards = {};

  private getItem<T>(registry: {[name: string]: T}, name: string): T {
    const item = registry[name];
    if (item === undefined) {
      throw new Error(`item '${name} not found in regisry`);
    }
    return item;
  }

  private registerReducer<T>(name: string, reducer: IReducer<T>) {
    if (this.reducers[name] !== undefined) {
      throw new Error(`reducer named '${name}' already registered`);
    }
    this.reducers = Object.assign(this.reducers, {[name]: reducer});
  }

  private registerEffect(name: string, effect: IEffect) {
    if (this.effects[name] !== undefined) {
      throw new Error(`effect named '${name}' already registered`);
    }
    this.effects = Object.assign(this.effects, {[name]: effect});
  }

  private registerView(name: string, view: IView) {
    if (this.views[name] !== undefined) {
      throw new Error(`view named ${name} already registered`);
    }
    this.views = Object.assign(this.views, {[name]: view});
  }

  private registerResolver(name: string, guard: IGuard) {
    if (this.guards[name] !== undefined) {
      throw new Error(`guard named '${name}' already registered`);
    }
    this.guards = Object.assign(this.guards, {[name]: guard});
  }

  registerReducers(reducers: IReducers) {
    Object.keys(reducers).map(name =>
      this.registerReducer(name, reducers[name])
    );
  }

  registerEffects(effects: IEffects) {
    Object.keys(effects).map(name =>
      this.registerEffect(name, effects[name])
    );
  }

  registerViews(views: IViews) {
    Object.keys(views).map(name =>
      this.registerView(name, views[name])
    );
  }

  registerResolvers(guards: IGuards) {
    Object.keys(guards).map(name =>
      this.registerResolver(name, guards[name]));
  }

  getReducer(name: string) {
    return this.getItem(this.reducers, name);
  }

  getEffect(name: string) {
    return this.getItem(this.effects, name);
  }

  getView(name: string) {
    return this.getItem(this.views, name);
  }

  getGuard(name: string) {
    return this.getItem(this.guards, name);
  }

}
