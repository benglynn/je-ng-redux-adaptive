import { Injector, Injectable, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switch';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { IRouteConfig } from '../configuration/state';
import { Registry } from '../store/registry';
import { IView } from '../store/types';


import { HomeComponent } from './views/home.component';
import { AreaComponent } from '../area/views/area.component';
import { Error404Component } from './views/error404.component';

@Injectable()
export class RouteResolver implements Resolve<boolean> {

  viewRegistry: { [name: string]: IView };

  constructor(
    private injector: Injector,
    private router: Router,
    private store: Store,
    private registry: Registry) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      const resolverName = (route.data as { resolverName: string|undefined })
        .resolverName;
      if (resolverName === undefined) {
        return Observable.of(true);
      }
      const resolver = this.registry.resolvers.resolverName;
      return Observable.of(true);

      /*
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
            const resolverName = routeConfig.resolverName;
            const resolver = this.registry.resolvers[resolverName];
            if (resolver === undefined) {
              throw new Error(`no registered resolver for '${resolverName}`);
            }
            return resolver(url, this.injector);
          } else {
            const componentName = routeConfig.rootViewName as string;
            const component = this.registry.views[componentName];
            if (component === undefined) {
              throw new Error(`no registered view for '${componentName}'`);
            }
            return Observable.of(component);
          }
        })
        .switch()
        .take(1); */
  }
}
