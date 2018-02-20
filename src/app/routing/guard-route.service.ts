import { Inject, Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { RouteConfig } from './route-config';
import { UpdateIsUrlResolvedAction } from '../core/actions/update-is-url-resolved-action';
import { NavigationStartAction } from '../routing/actions/navigation-start-action';
import { Effect } from '../core/effects/effect';
import { effectCall } from '../core/effects/effect-call';

@Injectable()
export class GuardRoute implements CanActivate {

  constructor(
    private injector: Injector,
    private router: Router,
    private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    const config = route.data as RouteConfig;
    if (config.effect === undefined) {
      this.store.dispatch(new UpdateIsUrlResolvedAction(true));
      return Observable.of(true);
    }
    const action = new NavigationStartAction(route.url.join('/'));
    return effectCall(<Effect>config.effect)(action, this.store, this.injector)
      .do(isResolved => this.store.dispatch(
        new UpdateIsUrlResolvedAction(isResolved)));
  }
}
