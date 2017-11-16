import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../area';
import { IAction, IReducer, IEffect, IEffects, IView, IViews
} from './types';
import { RestaurantsService } from '../restaurants';

@Injectable()
export class Registry {

  reducers: any = {}; // TODO: behaviorSubject.concat() better?
  effects: IEffects = {};
  private views: IViews = {};

  private getItem<T>(registry: {[name: string]: T}, name: string): T {
    const item = registry[name];
    if (item === undefined) {
      throw new Error(`item '${name}' not found in regisry`);
    }
    return item;
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

  getReducer(name: string) {
    return this.getItem(this.reducers, name);
  }

  getEffect(name: string) {
    return this.getItem(this.effects, name);
  }

  getView(name: string) {
    return this.getItem(this.views, name);
  }

}
