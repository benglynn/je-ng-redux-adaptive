import { Injector } from '@angular/core';
import { IActionX } from '../store/types';
import { RestaurantService } from '../services/restaurant.service';
import { StoreX } from '../store/store';

export function loadRestaurants (action: IActionX, injector: Injector) {
  const restaurantsService = injector.get(RestaurantService);
  const storex = injector.get(StoreX);
  restaurantsService.getRestaurants(action.payload)
  .subscribe(restaurants =>
    storex.dispatch({
      type: 'NOW_WIRE_UP_THE RESTUARANTS_REDUCERS :)', payload: restaurants})
  );
}

export const effects = {
  'loadRestaurants': loadRestaurants
}
