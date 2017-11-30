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
}

interface PublicApiRestaurantsResponse {
  ClosedRestaurants: PublicApiRestaurant[];
  OpenRestaurants: PublicApiRestaurant[];
  MetaData: {
    ResultCount: number;
  };
}

@Injectable()
export class RestaurantsService {

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
    const params = { q: area, c: '', name: '' };
    return this.http.get<PublicApiRestaurantsResponse>(
      this.uri, { headers: this.headers, params: params })
      .map(apiResponse => apiResponse.OpenRestaurants
      .map(apiRestaurnat => <IRestaurant>{
        logoUrl: apiRestaurnat.LogoUrl,
        title: apiRestaurnat.Name,
      }));
  }
}
