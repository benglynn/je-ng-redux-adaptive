import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Store } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRestaurants from '../reducers/restaurants';
import { Restaurant } from '../models/restaurant';

@Injectable()
export class RestaurantService {

  constructor(
    private store: Store<fromReducers.State>
  ) {}

  getRestaurants(postcode: string): Observable<Restaurant[]> {
    this.store.dispatch(new fromRestaurants.UpdateStatus(
      fromRestaurants.Status.Loading));
    return Observable.from([[
      {name: 'test-restaurant', title: 'A Test Restaurant'},
      {name: 'another-restaurant', title: 'Another Restaurnat'},
      {name: 'yet-another-restaurant', title: 'Yet Another Restaurant'}
    ]])
    .delay(500);
  }
}
