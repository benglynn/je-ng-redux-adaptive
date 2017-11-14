import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationEndAction } from './actions';
import { Store } from '../store/store';


@Injectable()
export class RouteActionService {
  constructor( private router: Router, private store: Store ) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.store.dispatch(new NavigationEndAction(event.urlAfterRedirects));
      });
  }
}
