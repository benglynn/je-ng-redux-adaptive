import { Routes } from '@angular/router';
import { GuardInitialRoute } from './core/guard-initial-route.service';
import { Error404Component } from './core/views/error404.component';

export const appRoutes: Routes = [
  { path: '**',
    component: Error404Component,
    canActivate: [ GuardInitialRoute ]
  },
];
