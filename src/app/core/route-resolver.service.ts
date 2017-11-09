import { Injectable, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Store } from '../store/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { IRouteConfig, IRoutesConfig } from '../configuration/state';
import { Registry } from '../store/registry';


import { HomeComponent } from './views/home.component';
import { AreaComponent } from '../area/views/area.component';
import { Error404Component } from './views/error404.component';

@Injectable()
export class RouteResolver implements Resolve<string> {

  viewRegistry: { [name: string]: any };

  constructor(
    private router: Router,
    private store: Store,
    private registry: Registry) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      return this.store.select('configuration') // TODO: select allows multiple levels

        .map(configuration => {
          const url = route.url.join('/');
          const doesMatch = routeConfName => {
            const routeConf = configuration.routes[routeConfName];
            const regex = new RegExp(routeConf.urlPattern, 'i');
            return url.match(regex) !== null;
          };
          const routeName = Object.keys(configuration.routes)
            .find(doesMatch) || 'error404';

          const routeConfig: IRouteConfig = configuration.routes[routeName];
          if (routeConfig.rootViewName === undefined &&
              routeConfig.resolverName === undefined) {
                throw new Error(`route '${routeName}' has niether ` +
                `rootViewName nor resolverName`);
          }
          if (routeConfig.resolverName !== undefined) {
            throw new Error('route resolver not implemented');
          } else {
            const componentName = routeConfig.rootViewName as string;
            const component = this.registry.views[componentName];
            if (component === undefined) {
              throw new Error(`no registered view for '${componentName}'`);
            }
            return component;
          }
        }).take(1);
  }
}
