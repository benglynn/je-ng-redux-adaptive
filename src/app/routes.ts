import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { LoadingContainerComponent } from './core/loading-container/loading-container.component';
import { RouteResolver } from './core/route-resolver.service';

export const appRoutes: Routes = [
  { path: '**',
    component: LoadingContainerComponent,
    resolve: { rootView: RouteResolver }
  },
];
