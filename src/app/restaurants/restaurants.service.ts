import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import { Restaurant } from '../restaurant';
import { Status as RestaurantsStatus } from '../restaurants/state';

@Injectable()
export class RestaurantsService {

  getRestaurants(postcode: string): Observable<Restaurant[]> {
    return Observable.from([[
      {name: 'test-restaurant', title: 'A Test Restaurant'},
      {name: 'another-restaurant', title: 'Another Restaurnat'},
      {name: 'yet-another-restaurant', title: 'Yet Another Restaurant'}
    ]])
    .delay(500);
  }
}
