import { Injector } from '@angular/core';
import { IAction } from '../store/types';
import { UpdateRestaurants, UpdateRestaurantStatus } from '../restaurants/actions';
import { Status } from '../restaurants/state';
import { RestaurantService } from '../services/restaurant.service';
import { Store } from '../store/store';

export function loadRestaurants (action: IAction, injector: Injector) {
  const restaurantsService = injector.get(RestaurantService);
  const storex = injector.get(Store);
  storex.dispatch(new UpdateRestaurantStatus(Status.Loading));
  restaurantsService.getRestaurants(action.payload)
  .subscribe(data =>
    storex.dispatch(new UpdateRestaurants(data))
  );
}

export const effects = {
  'loadRestaurants': loadRestaurants
}
