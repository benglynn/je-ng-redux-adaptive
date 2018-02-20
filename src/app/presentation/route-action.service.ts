import { Inject, Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavigationStartAction } from './actions/navigation-start-action';
import {NavigationEndAction } from './actions';
import { Store } from '../store/store';
import { Action } from '../store/action';
import { UPDATE_ROUTES } from './update-routes';
import { VIEWS, IViews } from '../app.views';
import { mapStateRoutes } from './map-state-routes';

@Injectable()
export class RouteActionService {

  constructor(
    @Inject(VIEWS) private views: IViews|IViews,
    private router: Router,
    private store: Store
  ) {
    this.store.action$
      .filter(action => action.actionType === Action.updateRoutesAction)
      .withLatestFrom(this.store.select('core'))
      .subscribe(([action, coreSlice]) => {
        const newRoutes = mapStateRoutes(coreSlice, this.views);
        this.router.resetConfig(newRoutes);
      });
  }

  subscribeToRouterEvents() {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) =>
        this.store.dispatch(new NavigationStartAction(event.url))
      );
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) =>
        this.store.dispatch(new NavigationEndAction(event.urlAfterRedirects))
    );
  }
}
