import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes, RouterStateSnapshot,
  UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '../store/store';
import { Registry } from '../store/registry';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { GuardRoute } from './guard-route.service';
import { RouteActionService } from './route-action.service';

@Injectable()
export class GuardInitialRoute implements CanActivate {

  constructor(
    private routActionService: RouteActionService,
    private router: Router,
    private store: Store,
    private registry: Registry ) {}

  regexMatcher(pattern) {
    return function(url: UrlSegment[]) {
      const urlString = url.join('/');
      const regex = new RegExp(pattern, 'i');
      return urlString.match(regex) !== null ?
        { consumed: url } : null;
    };
  }

  mapStateRoutes(configuration: IConfigurationState): Routes {
    return Object.values(configuration)
      .filter((config: ISliceConfiguration) => config.routes !== undefined)
      .reduce((prev, curr: ISliceConfiguration) => prev.concat(curr.routes), [])
      .map((config: IRouteConfig) => {
        const view = this.registry.getView(config.viewName as string);
        const matcher = this.regexMatcher(config.pattern);
        return {
          matcher: matcher,
          component: view,
          data: config,
          canActivate: [ GuardRoute ]
        };
      })
      .concat({ path: '**', component: this.registry.getView('error404View') });
  }

  canActivate(_, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('configuration')
      .map(configuration => {
        const newRoutes = this.mapStateRoutes(configuration);
      this.router.resetConfig(newRoutes);
      this.routActionService.subscribe();
      this.router.navigateByUrl(state.url, { replaceUrl: true });
      return false;
    });
  }
}
