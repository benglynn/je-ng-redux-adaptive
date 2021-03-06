import { Injector } from '@angular/core';
import { Store } from '../../store/store';
import { NavigationStartAction } from '../../presentation/actions/navigation-start-action';
import { EffectFunc } from '../../store/effect-func';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { UpdateRestaurantsAction } from '../../restaurants/actions/update-restaurants-action';
import { UpdateAreaAction } from '../../area/actions/update-area-action';

export const loadRestaurantsEffect: EffectFunc =  (
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
