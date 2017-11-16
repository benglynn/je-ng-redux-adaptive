import { Injectable, Injector } from '@angular/core';
import * as fromPostcode from '../area';
import { IAction, IReducer, IEffect, IView, IViews
} from './types';
import { RestaurantsService } from '../restaurants';
import { IEffects } from '../app.effects';

@Injectable()
export class Registry {

  private views: IViews = {};

  private getItem<T>(registry: {[name: string]: T}, name: string): T {
    const item = registry[name];
    if (item === undefined) {
      throw new Error(`item '${name}' not found in regisry`);
    }
    return item;
  }

  private registerView(name: string, view: IView) {
    if (this.views[name] !== undefined) {
      throw new Error(`view named ${name} already registered`);
    }
    this.views = Object.assign(this.views, {[name]: view});
  }

  registerViews(views: IViews) {
    Object.keys(views).map(name =>
      this.registerView(name, views[name])
    );
  }

  getView(name: string) {
    return this.getItem(this.views, name);
  }

}
