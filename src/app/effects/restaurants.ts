import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { EffectCores } from '.';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/zip';
import * as fromRestaurants from '../reducers/restaurants';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class RestaurantEffects {

  @Effect() loadRestauants$: Observable<Action> = this.actions$
    .ofType<fromRestaurants.LoadRestaurants>(fromRestaurants.LOAD_RESTAURANTS)
    .zip(this.effectCores.store$.filter(
      effectCore => effectCore.name === 'loadRestaurants'))
    .map(([action, effectCore]) => effectCore.fn.call(this, action))
    .mergeMap(input => input);

  loadRestauantsCore(action: fromRestaurants.LoadRestaurants) {
    return this.restaurantService.getRestaurants(action.payload)
      .map(data => new fromRestaurants.UpdateRestaurants(data));
  }

  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService,
    private effectCores: EffectCores
  ) {
    this.effectCores.register('loadRestaurants', this.loadRestauantsCore);
  }
}
