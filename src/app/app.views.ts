import { InjectionToken } from '@angular/core';
import { ICoreViews, coreViews } from './core/views';
import { IAreaViews, areaViews } from './area/views';
import { IAdaptResultsViewViews, adaptRresultViewViews
} from './adapt-result-view/views';
import { IRestaurantsViews, restaurantsViews } from './restaurants/views';

export type IView = any; // TODO: is there a more appropriate interface?

export interface IViews extends
  ICoreViews,
  IAreaViews,
  IAdaptResultsViewViews,
  IRestaurantsViews {}

export const views: IViews = {
  ...coreViews,
  ...areaViews,
  ...adaptRresultViewViews,
  ...restaurantsViews,
};

export const VIEWS = new InjectionToken<IViews>('views');
