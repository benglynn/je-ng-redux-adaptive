import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergemap';
import * as fromRestaurants from '../reducers/restaurants';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class RestaurantEffects {
  @Effect() loadRestauants$: Observable<Action> = this.actions$
    .ofType<fromRestaurants.LoadRestaurants>(fromRestaurants.LOAD_RESTAURANTS)
    .mergeMap(action => this.restaurantService.getRestaurants(action.payload)
      .map(data => new fromRestaurants.UpdateRestaurants(data)));

  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService
  ) {}

}
