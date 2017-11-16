import { Inject, Injector, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Store } from '../store/store';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { LoggerService } from '../core/logger.service';
import { NavigationStartAction } from '../routing/actions';
import { EFFECTS, IEffects } from '../app.effects';

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
      return Observable.of(true);
    }
    const effect = this.effects[config.effectName];
    const action = new NavigationStartAction(route.url.join('/'));
    this.loggerService.log(`Effect ${config.effectName}`);
    return effect(action, this.store, this.injector);
  }
}
