import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import { IRestaurant } from '../restaurant';

@Injectable()
export class NewRestaurantsService {

  getRestaurants(area: string): Observable<IRestaurant[]> {
    return Observable.from([[
      {name: 'test-restaurant', title: 'Your favourite restaurant'},
      {name: 'another-restaurant', title: 'You often order here'},
      {name: 'yet-another-restaurant', title: 'Others like you like this'},
      {name: 'test-restaurant', title: 'A Test Restaurant'},
      {name: 'another-restaurant', title: 'Another Restaurnat'},
      {name: 'yet-another-restaurant', title: 'Yet Another Restaurant'},
      {name: 'test-restaurant', title: 'A Test Restaurant'},
      {name: 'another-restaurant', title: 'Another Restaurnat'},
      {name: 'yet-another-restaurant', title: 'Yet Another Restaurant'},
    ]])
    .delay(500);
  }
}
