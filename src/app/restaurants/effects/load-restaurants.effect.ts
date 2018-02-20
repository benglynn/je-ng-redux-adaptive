import { Injector } from '@angular/core';
import { Store } from '../../store/store';
import { NavigationStartAction } from '../../routing/actions/navigation-start-action';
import { Effect } from '../../store/effect';
import { RestaurantsService } from '../../restaurants';
import { Observable } from 'rxjs/Observable';
import { UpdateRestaurantsAction } from '../../restaurants/actions/update-restaurants-action';
import { UpdateAreaAction } from '../../area/actions/update-area-action';

export const loadRestaurantsEffect: Effect<NavigationStartAction> =  (
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
