import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router, Routes, RouterStateSnapshot,
  UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Store } from '../store/store';
import { GuardRoute } from './guard-route.service';
import { RouteActionService } from './route-action.service';
import { VIEWS, IViews } from '../app.views';
import { IView } from '../app.views';
import { mapStateRoutes } from './map-state-routes';

@Injectable()
export class GuardInitialRoute implements CanActivate {

  constructor(
    @Inject(VIEWS) private views: IViews|IViews,
    private routActionService: RouteActionService,
    private router: Router,
    private store: Store
  ) {}

  canActivate(_, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('core')
      .pluck('isAdapted')
      .filter(value => value === true)
      .take(1)
      .switchMap(ready => this.store.select('core'))
      .map(coreSlice => {
        const newRoutes = mapStateRoutes(coreSlice, this.views);
        this.router.resetConfig(newRoutes);
        this.routActionService.subscribeToRouterEvents();
        this.router.navigateByUrl(state.url, { replaceUrl: true });
        return false;
      }
    );
  }
}
