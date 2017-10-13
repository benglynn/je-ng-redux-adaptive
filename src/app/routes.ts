import { Routes, UrlSegment } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { ErrorPage404Component } from './error-page-404/error-page-404.component';
import { AreaPageComponent } from './area-page/area-page.component';


export function restaurantMatcher(url: UrlSegment[]) {
  const pagePattern = /^restaurant-([^/]+)$/;
  const match = url.length === 1 && url[0].path.match(pagePattern) || null;
  return (match === null) ? ({consumed: []}) : ({consumed: url});
}

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'area/:id', component: AreaPageComponent },
  { matcher: restaurantMatcher, component: RestaurantPageComponent },
  { path: '**', component: ErrorPage404Component }
];
