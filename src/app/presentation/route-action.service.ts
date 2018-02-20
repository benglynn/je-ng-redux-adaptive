import { Inject, Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavigationStartAction } from './actions/navigation-start-action';
import {NavigationEndAction } from './actions/navigation-end-action';
import { Store } from '../store/store';
import { Action } from '../store/action';
import { UPDATE_ROUTES } from './update-routes';
import { mapStateRoutes } from './map-state-routes';

@Injectable()
export class RouteActionService {

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.action$
      .filter(action => action.actionType === Action.updateRoutesAction)
      .withLatestFrom(this.store.select('core'))
      .subscribe(([action, coreSlice]) => {
        const newRoutes = mapStateRoutes(coreSlice);
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
