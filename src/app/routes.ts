import { Routes, UrlSegment } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RestaurantContainerComponent } from './containers/restaurant-container/restaurant-container.component';
import { ErrorContainerComponent } from './containers/error-container/error-container.component';
import { AreaContainerComponent } from './containers/area-container/area-container.component';

export const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: ':postcode', component: AreaContainerComponent },
  { path: ':postcode/:restaurant', component: RestaurantContainerComponent },
  { path: '**', component: ErrorContainerComponent }
];
