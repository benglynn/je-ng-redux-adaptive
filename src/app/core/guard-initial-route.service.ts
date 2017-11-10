import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes, RouterStateSnapshot,
  UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestComponent } from '../core/views/test.component';
import { Store } from '../store/store';
import { Registry } from '../store/registry';
import { IConfigurationState, ISliceConfiguration, IRouteConfig } from '../configuration';
import { RouteResolver } from './route-resolver.service';
import { GuardRoute } from './guard-route.service';

@Injectable()
export class GuardInitialRoute implements CanActivate {

  constructor( private router: Router, private store: Store,
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
        const view = this.registry.views[config.viewName as string];
        if (view === undefined) {
          throw new Error(`no registered view '${config.viewName}'`);
        }
        const matcher = this.regexMatcher(config.pattern);
        return {
          matcher: matcher,
          component: view,
          data: config,
          canActivate: [ GuardRoute ]
        };
      })
      .concat({ path: '**', component: this.registry.views['error404View'] }); // TODO: move ALL error checking to registry
  }

  canActivate(_, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('configuration')
      .map(configuration => {
        const newRoutes = this.mapStateRoutes(configuration);
      console.log(newRoutes);
      this.router.resetConfig(newRoutes);
      this.router.navigateByUrl(state.url, { replaceUrl: true });
      return false;
    });
  }
}
