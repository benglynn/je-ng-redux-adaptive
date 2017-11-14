import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavigationStartAction, NavigationEndAction } from './actions';
import { Store } from '../store/store';


@Injectable()
export class RouteActionService {
  constructor( private router: Router, private store: Store ) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) =>
        this.store.dispatch(new NavigationStartAction(event.url))
      );
    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) =>
      this.store.dispatch(new NavigationEndAction(event.urlAfterRedirects))
    );
  }
}
