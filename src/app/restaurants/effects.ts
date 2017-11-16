import { Injector } from '@angular/core';
import { IEffect, IAction } from '../store/types';
import { NavigationStartAction } from '../routing/actions';
import { UpdateRestaurants } from '../restaurants/actions';
import { UpdateAreaAction } from '../area/actions';
import { RestaurantsService } from '../restaurants';
import { Store } from '../store/store';
import { Observable } from 'rxjs/Observable';

export const loadRestaurantsEffect: IEffect =  (
  action: NavigationStartAction,
  injector: Injector
): Observable<boolean> => {

  const url = action.payload;
  const restaurantsService = injector.get(RestaurantsService);
  const store = injector.get(Store);
  return restaurantsService.getRestaurants(url)
    .map(data => {
      store.dispatch(new UpdateAreaAction(url));
      store.dispatch(new UpdateRestaurants(data));
      return true;
    });
};

export const effects = {
  'loadRestaurantsEffect': loadRestaurantsEffect
};
