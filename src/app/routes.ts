import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import {
  Routes,
  Resolve,
  UrlSegment,
  UrlMatcher,
  UrlMatchResult,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AreaContainerComponent } from './area/area-container/area-container.component';
import { HomeContainerComponent } from './core/home-container/home-container.component';
import { LoadingContainerComponent } from './core/loading-container/loading-container.component';
import { RestaurantContainerComponent } from './restaurant/restaurant-container/restaurant-container.component';
import { RouteResolver } from './core/route-resolver.service';

export const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: ':area', component: AreaContainerComponent },
  { path: ':area/:restaurant', component: RestaurantContainerComponent },
  { path: '**',
    component: LoadingContainerComponent,
    resolve: { rootView: RouteResolver }
  },
];
