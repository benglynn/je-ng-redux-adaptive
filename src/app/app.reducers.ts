import { InjectionToken } from '@angular/core';
import { IRestaurantsReducers, restaurantsReducers } from './restaurants/reducers';
import { ICoreReducers, coreReducers } from './core/reducers';
import { IAreaReducers, areaReducers } from './area/reducers';
import { IAdaptResultViewConfigReducers, adaptResultViewConfigReducers } from './adapt-result-view/reducers';

import { Action } from './store';

type INoReducers = Object;

export interface IAction {
  type: string;
  actionType: Action;
  payload?: any;
}

export type IReducer<T> = (action: IAction, state: T) => T;

