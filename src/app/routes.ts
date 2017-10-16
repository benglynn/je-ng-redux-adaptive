import { Routes, UrlSegment } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RestaurantContainerComponent } from './containers/restaurant-container/restaurant-container.component';
import { ErrorContainerComponent } from './containers/error-container/error-container.component';
import { AreaContainerComponent } from './containers/area-container/area-container.component';


export function restaurantMatcher(url: UrlSegment[]) {
  const pagePattern = /^restaurant-([^/]+)$/;
  const match = url.length === 1 && url[0].path.match(pagePattern) || null;
  return (match === null) ? ({consumed: []}) : ({consumed: url});
}

export const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'area/:id', component: AreaContainerComponent },
  { matcher: restaurantMatcher, component: RestaurantContainerComponent },
  { path: '**', component: ErrorContainerComponent }
];
