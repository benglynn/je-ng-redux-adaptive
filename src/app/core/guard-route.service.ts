import { Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '../store/store';
import { Registry } from '../store/registry';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { RouteResolver } from './route-resolver.service';
import { IResolver } from '../store/types';

@Injectable()
export class GuardRoute implements CanActivate {

  constructor(
    private injector: Injector,
    private router: Router,
    private store: Store,
    private registry: Registry ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    const config = route.data as IRouteConfig;
    if (config.resolverName === undefined) {
      return Observable.of(true);
    }
    const resolver = this.registry.resolvers[config.resolverName] as IResolver;
    if (resolver === undefined) {
      throw new Error(`no registered resolver '${config.resolverName}'`);
    }
    const url = route.url.join('/');
    return resolver(url, this.injector);
  }
}
