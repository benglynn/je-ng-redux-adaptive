import { Routes, UrlSegment } from '@angular/router';
import { LoadingContainerComponent } from './core/loading-container/loading-container.component';
import { HomeContainerComponent } from './core/home-container/home-container.component';
import { ErrorContainerComponent } from './core/error-container/error-container.component';
import { RestaurantContainerComponent } from './restaurant/restaurant-container/restaurant-container.component';
import { AreaContainerComponent } from './area/area-container/area-container.component';

export const appRoutes: Routes = [
  { path: 'dynamic', component: LoadingContainerComponent },
  { path: '', component: HomeContainerComponent },
  { path: ':area', component: AreaContainerComponent },
  { path: ':area/:restaurant', component: RestaurantContainerComponent },
  { path: '**', component: ErrorContainerComponent }
];
