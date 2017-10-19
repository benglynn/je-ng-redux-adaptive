import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/zip';
import * as fromRestaurants from '../reducers/restaurants';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class RestaurantEffects {

  effectCore$ = Observable.from([
    function loadRestauants(action: fromRestaurants.LoadRestaurants): Observable<Action> {
      return this.restaurantService.getRestaurants(action.payload)
        .map(data => new fromRestaurants.UpdateRestaurants(data));
    }]);

  @Effect() loadRestauants$: Observable<Action> = this.actions$
    .ofType<fromRestaurants.LoadRestaurants>(fromRestaurants.LOAD_RESTAURANTS)
      .zip(this.effectCore$.filter(fn => fn.name === 'loadRestauants'))
      .map(values => {
        const [action, fn] = values;
        return fn.call(this, action);
      })
      .mergeMap(input => input);

  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService
  ) {}
}
