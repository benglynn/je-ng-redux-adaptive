import { Inject, Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { IConfigurationState, IRouteConfig } from '../app.configuration';
import { LoggerService } from '../core/logger.service';
import { UpdateIsUrlResolved } from '../core/actions';
import { NavigationStartAction } from '../routing/actions';
import { EFFECTS, IEffect, IEffects } from '../app.effects';

@Injectable()
export class GuardRoute implements CanActivate {

  constructor(
    @Inject(EFFECTS) private effects: IEffects|IEffects, // TODO: remove union
    private injector: Injector,
    private router: Router,
    private store: Store,
    private loggerService: LoggerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    const config = route.data as IRouteConfig;
    if (config.effectName === undefined) {
      this.store.dispatch(new UpdateIsUrlResolved(true));
      return Observable.of(true);
    }
    const effect: IEffect<NavigationStartAction> = this.effects[config.effectName];
    const action = new NavigationStartAction(route.url.join('/'));
    this.loggerService.log(`Effect ${config.effectName}`);
    return effect(action, this.store, this.injector)
      .do(isResolved => this.store.dispatch(new UpdateIsUrlResolved(isResolved)));
  }
}
