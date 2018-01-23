import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import { IRestaurant } from '../restaurant';

@Injectable()
export class NewRestaurantsService {

  getRestaurants(area: string): Observable<IRestaurant[]> {
    return Observable.from([[
      {title: 'Your favourite restaurant', rating: 5, ratings: 300}
    ]])
    .delay(500);
  }
}
