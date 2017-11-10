import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IView, IGuard, IGuards } from '../store/types';
import { AreaComponent } from './views/area.component';
import { Store } from '../store/store';
import { UpdateAreaAction } from '../area/actions';
import {  RestaurantsService, UpdateRestaurants } from '../restaurants';

export const areaRouteGuard: IGuard =
  (url: string, injector: Injector): Observable<IView> => {
    const restaurantsService = injector.get(RestaurantsService);
    return restaurantsService.getRestaurants(url)
      .map(data => {
        const store = injector.get(Store);
        store.dispatch(new UpdateAreaAction(url));
        store.dispatch(new UpdateRestaurants(data));
        return true;
      });
  };

export const guards: IGuards = {
  areaRouteGuard: areaRouteGuard
};

