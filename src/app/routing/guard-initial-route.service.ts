import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, RouterStateSnapshot,
  UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '../store/store';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { GuardRoute } from './guard-route.service';
import { RouteActionService } from './route-action.service';
import { VIEWS, IViews } from '../app.views';
import { IView } from '../app.views';

@Injectable()
export class GuardInitialRoute implements CanActivate {

  constructor(
    @Inject(VIEWS) private views: IViews|IViews,
    private routActionService: RouteActionService,
    private router: Router,
    private store: Store
  ) {}

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
        const view = this.views[config.viewName] as IView;
        const matcher = this.regexMatcher(config.pattern);
        return {
          matcher: matcher,
          component: view,
          data: config,
          canActivate: [ GuardRoute ]
        };
      })
      .concat({ path: '**', component: this.views['error404View'] });
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
