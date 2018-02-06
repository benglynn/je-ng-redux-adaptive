import { InjectionToken } from '@angular/core';
import { IRestaurantsReducers, restaurantsReducers } from './restaurants/reducers';
import { ICoreReducers, coreReducers } from './core/reducers';
import { IAreaReducers, areaReducers } from './area/reducers';
import { IAdaptResultViewConfigReducers, adaptResultViewConfigReducers } from './adapt-result-view/reducers';
import { IAdaptRoutesConfigReducers, adaptRoutesConfigReducers } from './adapt-routes/reducers';

type INoReducers = Object;

export interface IAction {
  type: string;
  payload?: any;
}

export type IReducer<T> = (action: IAction, state: T) => T;

