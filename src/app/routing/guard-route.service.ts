import { Inject, Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { RouteConfig } from './route-config';
import { LoggerService } from '../core/logger.service';
import { UpdateIsUrlResolvedAction } from '../core/actions/update-is-url-resolved-action';
import { NavigationStartAction } from '../routing/actions/navigation-start-action';
import { EffectFunc } from '../store/effect-func';
import { EFFECTS, Effects } from '../app.effects';

@Injectable()
export class GuardRoute implements CanActivate {

  constructor(
    @Inject(EFFECTS) private effects: Effects|Effects, // TODO: remove union
    private injector: Injector,
    private router: Router,
    private store: Store,
    private loggerService: LoggerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    const config = route.data as RouteConfig;
    if (config.effectName === undefined) {
      this.store.dispatch(new UpdateIsUrlResolvedAction(true));
      return Observable.of(true);
    }
    const effect: EffectFunc = this.effects[config.effectName];
    const action = new NavigationStartAction(route.url.join('/'));
    this.loggerService.log(`Effect ${config.effectName}`);
    return effect(action, this.store, this.injector)
      .do(isResolved => this.store.dispatch(new UpdateIsUrlResolvedAction(isResolved)));
  }
}
