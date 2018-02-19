import { Injector } from '@angular/core';
import { Store } from '../../store/store';
import { NavigationStartAction } from '../../routing/actions';
import { IEffect } from '../../app.effects';
import { RestaurantsService } from '../../restaurants';
import { Observable } from 'rxjs/Observable';
import { UpdateRestaurantsAction } from '../../restaurants/actions';
import { UpdateAreaAction } from '../../area/actions';

export const loadRestaurantsEffect: IEffect<NavigationStartAction> =  (
  action: NavigationStartAction,
  store: Store,
  injector: Injector
): Observable<boolean> => {

  const url = action.payload;
  const restaurantsService = injector.get(RestaurantsService);
  return restaurantsService.getRestaurants(url)
    .map(data => {
      store.dispatch(new UpdateAreaAction(url));
      store.dispatch(new UpdateRestaurantsAction(data));
      return true;
    });
};
