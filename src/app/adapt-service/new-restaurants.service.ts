import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import { IRestaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants';

@Injectable()
export class NewRestaurantsService {

  restaurantsServie: RestaurantsService;

  constructor(restaurantsService: RestaurantsService) {
    this.restaurantsServie = restaurantsService;
  }

  getRestaurants(area: string): Observable<IRestaurant[]> {
    return this.restaurantsServie.getRestaurants(area)
      .map(restaurants => {
        const newRestaurants = restaurants;
        newRestaurants.unshift(<IRestaurant>{
        cuisines: 'Curry',
        deliveryCost: 2,
        deliveryStartTime: '',
        drivingDistance: 0.1,
        isCollectNow: true,
        isDeliveryNow: true,
        isOpen: true,
        isSponsored: true,
        openingTime: '',
        percentOff: 50,
        rating: 6,
        ratings: 150,
        title: 'Your favourite place!',
        })
        return restaurants;
      });
  }
}
