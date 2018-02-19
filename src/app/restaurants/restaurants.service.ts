import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { Restaurant } from '../restaurant';

interface PublicApiRestaurant {
  Badges: [String];
  Cuisines: [{ Name: string, SeoName: string }];
  DeliveryCost: number;
  DeliveryStartTime: string;
  DriveDistance: number;
  IsCollection: boolean;
  IsDelivery: boolean;
  IsSponsored: boolean;
  LogoUrl: string;
  Name: string;
  OfferPercent: number;
  OpeningTime: string;
  RatingDetails: { Count: number, StarRating: number };
}

interface PublicApiRestaurantsResponse {
  ClosedRestaurants: [PublicApiRestaurant];
  OpenRestaurants: [PublicApiRestaurant];
  MetaData: {
    ResultCount: number;
  };
}

@Injectable()
export class RestaurantsService {

  // http://public.je-apis.com/swagger-ui/#!/restaurants/SearchVersion3_get_1
  readonly uri = 'https://public.je-apis.com/restaurants/v3';

  readonly headers = {
    'Authorization': 'Basic YnJpc3RvbC11bml2ZXJzaXR5OkBRM3dlUFVWRGRLaGZzdHNURDRHRnZmVGRidEJtQE1M',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.8',
    'Accept-Tenant': 'uk',
    'Content-Type': 'application/json'
  };

  constructor( private http: HttpClient ) {}

  getRestaurants(area: string): Observable<Restaurant[]> {

    const simplifyRestaurant = (apiRestaurant: PublicApiRestaurant, isOpen: boolean
    ): Restaurant => {
      return <Restaurant>{
        cuisines: apiRestaurant.Cuisines.map(cuisine => cuisine.Name).join(', '),
        deliveryCost: apiRestaurant.DeliveryCost,
        deliveryStartTime: apiRestaurant.DeliveryStartTime,
        drivingDistance: apiRestaurant.DriveDistance,
        isCollectNow: apiRestaurant.IsCollection,
        isDeliveryNow: apiRestaurant.IsDelivery,
        isOpen: isOpen,
        isSponsored: apiRestaurant.IsSponsored,
        logoUrl: apiRestaurant.LogoUrl,
        openingTime: apiRestaurant.OpeningTime,
        percentOff: apiRestaurant.OfferPercent,
        rating: apiRestaurant.RatingDetails.StarRating,
        ratings: apiRestaurant.RatingDetails.Count,
        title: apiRestaurant.Name,
      };
    };

    const params = { q: area, c: '', name: '' };
    return this.http.get<PublicApiRestaurantsResponse>(
      this.uri, { headers: this.headers, params: params })
      // .do(apiResponse => { [debugger })
      .map(apiResponse => {
        const open = apiResponse.OpenRestaurants
          .map(apiRestaurant => simplifyRestaurant(apiRestaurant, true));
        const closed = apiResponse.ClosedRestaurants
          .map(apiRestaurant => simplifyRestaurant(apiRestaurant, false));
        return open.concat(closed);
      });
  }
}
