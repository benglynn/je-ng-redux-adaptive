import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { LoadingContainerComponent } from './core/loading-container/loading-container.component';
import { RouteResolver } from './core/route-resolver.service';
import { GuardInitialRoute } from './core/guard-initial-route.service';
import { TestComponent } from './core/views/test.component';
import { Error404Component } from './core/views/error404.component';

export const appRoutes: Routes = [
  { path: '**',
    component: Error404Component,
    // resolve: { rootView: RouteResolver },
    canActivate: [ GuardInitialRoute ]
  },
];
