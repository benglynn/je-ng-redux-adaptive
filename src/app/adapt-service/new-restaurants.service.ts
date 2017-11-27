import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import { IRestaurant } from '../restaurant';

@Injectable()
export class NewRestaurantsService {

  getRestaurants(area: string): Observable<IRestaurant[]> {
    return Observable.from([[
      {title: 'Your favourite restaurant'},
      {title: 'You often order here'},
      {title: 'Others like you like this'},
      {title: 'A Test Restaurant'},
      {title: 'Another Restaurnat'},
      {title: 'Yet Another Restaurant'},
      {title: 'A Test Restaurant'},
      {title: 'Another Restaurnat'},
      {title: 'Yet Another Restaurant'},
    ]])
    .delay(500);
  }
}
