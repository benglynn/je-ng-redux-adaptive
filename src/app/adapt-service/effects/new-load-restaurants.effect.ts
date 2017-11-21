import { Injector } from '@angular/core';
import { Store } from '../../store/store';
import { NavigationStartAction } from '../../routing/actions';
import { IEffect } from '../../app.effects';
import { NewRestaurantsService } from '../new-restaurants.service';
import { Observable } from 'rxjs/Observable';
import { UpdateRestaurants } from '../../restaurants/actions';
import { UpdateAreaAction } from '../../area/actions';

export const newLoadRestaurantsEffect: IEffect<NavigationStartAction> =  (
  action: NavigationStartAction,
  store: Store,
  injector: Injector
): Observable<boolean> => {

  const url = action.payload;
  const restaurantsService = injector.get(NewRestaurantsService);
  return restaurantsService.getRestaurants(url)
    .map(data => {
      store.dispatch(new UpdateAreaAction(url));
      store.dispatch(new UpdateRestaurants(data));
      return true;
    });
};