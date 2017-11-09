import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { LoadingContainerComponent } from './core/loading-container/loading-container.component';
import { RestaurantContainerComponent } from './restaurant/restaurant-container/restaurant-container.component';
import { RouteResolver } from './core/route-resolver.service';

export const appRoutes: Routes = [
  { path: ':area/:restaurant', component: RestaurantContainerComponent },
  { path: '**',
    component: LoadingContainerComponent,
    resolve: { rootView: RouteResolver }
  },
];
