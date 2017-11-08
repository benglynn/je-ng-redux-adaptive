import { Injectable, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '../store/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { IRouteConfig, IRoutesConfig } from '../configuration/state';


import { HomeComponent } from './views/home.component';
import { Error404Component } from './views/error404.component';

@Injectable()
export class RouteResolver implements Resolve<string> {

  viewRegistry: { [name: string]: any };

  constructor(private router: Router, private store: Store) {
    this.viewRegistry = {
      homeView: HomeComponent,
      error404View: Error404Component
    };
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      return this.store.select('configuration') // TODO: select allows multiple levels
        .map(configuration => {

          const url = route.url.join('/');
          const matches = routeConfName => url.match(
            configuration.routes[routeConfName].urlPattern) !== null;
          const routeName = Object.keys(configuration.routes)
            .find(matches) || 'error404';
          const routeConfig: IRouteConfig|undefined = configuration
            .routes[routeName];
          if (routeConfig === undefined) {
            throw new Error(`no route config named '${routeName}'`);
          }
          if (routeConfig.rootViewName === undefined &&
              routeConfig.resolverName === undefined) {
                throw new Error(`route '${routeName}' has niether ` +
                `rootViewName nor resolverName`);
          }
          if (routeConfig.resolverName !== undefined) {
            throw new Error('route resolver not implemented');
          } else {
            const componentName = routeConfig.rootViewName as string;
            const component = this.viewRegistry[componentName];
            if (component === undefined) {
              throw new Error(`no registered view for '${componentName}'`);
            }
            return component;
          }
        }).take(1);
  }
}
