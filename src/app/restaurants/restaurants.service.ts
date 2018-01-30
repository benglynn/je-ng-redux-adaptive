import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { IRestaurant } from '../restaurant';

interface PublicApiRestaurant {
  Name: string;
  LogoUrl: string;
  Badges: [String];
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

  getRestaurants(area: string): Observable<IRestaurant[]> {

    const simplifyRestaurant = (apiRestaurant: PublicApiRestaurant, isOpen: boolean
    ): IRestaurant => {
      return <IRestaurant>{
        isOpen: isOpen,
        logoUrl: apiRestaurant.LogoUrl,
        title: apiRestaurant.Name,
        rating: apiRestaurant.RatingDetails.StarRating,
        ratings: apiRestaurant.RatingDetails.Count
      };
    };

    const params = { q: area, c: '', name: '' };
    return this.http.get<PublicApiRestaurantsResponse>(
      this.uri, { headers: this.headers, params: params })
      // .do(apiResponse => { debugger })
      .map(apiResponse => {
        const open = apiResponse.OpenRestaurants
          .map(apiRestaurant => simplifyRestaurant(apiRestaurant, true));
        const closed = apiResponse.ClosedRestaurants
          .map(apiRestaurant => simplifyRestaurant(apiRestaurant, false));
        return open.concat(closed);
      });
  }
}
