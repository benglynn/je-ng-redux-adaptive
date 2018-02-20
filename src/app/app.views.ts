import { InjectionToken } from '@angular/core';
import { ICoreViews, coreViews } from './core/views';
import { IAreaViews, areaViews } from './area/views';
import { IRestaurantsViews, restaurantsViews } from './restaurants/views';
import { IAdaptResultsViewViews, adaptRresultViewViews } from './adaptations/adapt-result-view/views';
import { IAdaptRoutesViews, adaptRoutesViews } from './adaptations/adapt-routes/views';

export interface IViews extends
  ICoreViews,
  IAreaViews,
  IRestaurantsViews,
  IAdaptResultsViewViews,
  IAdaptRoutesViews {}

export const views: IViews = {
  ...coreViews,
  ...areaViews,
  ...restaurantsViews,
  ...adaptRresultViewViews,
  ...adaptRoutesViews,
};

export type IViewName = keyof IViews;

export const VIEWS = new InjectionToken<IViews>('views');
