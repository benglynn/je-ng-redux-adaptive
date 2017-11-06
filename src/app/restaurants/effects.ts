import { Injector } from '@angular/core';
import { IActionX } from '../store/types';
import { UpdateRestaurants, UpdateRestaurantStatus } from '../restaurants/actions';
import { Status } from '../restaurants/state';
import { RestaurantService } from '../services/restaurant.service';
import { StoreX } from '../store/store';

export function loadRestaurants (action: IActionX, injector: Injector) {
  const restaurantsService = injector.get(RestaurantService);
  const storex = injector.get(StoreX);
  storex.dispatch(new UpdateRestaurantStatus(Status.Loading));
  restaurantsService.getRestaurants(action.payload)
  .subscribe(data =>
    storex.dispatch(new UpdateRestaurants(data))
  );
}

export const effects = {
  'loadRestaurants': loadRestaurants
}
