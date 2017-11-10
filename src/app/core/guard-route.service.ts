import { Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { Registry } from '../store/registry';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { IGuard } from '../store/types';

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
    if (config.guardName === undefined) {
      return Observable.of(true);
    }
    const guard = this.registry.getGuard(config.guardName);
    if (guard === undefined) {
      throw new Error(`no registered guard '${config.guardName}'`);
    }
    const url = route.url.join('/');
    return guard(url, this.injector);
  }
}
