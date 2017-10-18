import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../reducers';
import * as fromPostcode from '../../reducers/postcode';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/mergemap';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

const mockRestaurants = [[
  {title: 'Test restaurant', name: 'test-restaurant'},
  {title: 'Test restaurant 2', name: 'test-restaurant-2'},
  {title: 'Test restaurant 3', name: 'test-restaurant-3'}
]];

@Component({
  selector: 'app-area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.css']
})
export class AreaContainerComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;
  newRestaurants$: Observable<Restaurant[]>;
  postcode$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromReducers.State>,
    private restaurantService: RestaurantService
  ) {
    this.postcode$ = store.select('postcode');
    this.restaurants$ = this.postcode$
      .mergeMap(postcode => this.restaurantService.getRestaurants(postcode));

    route.params.map(p => String(p.postcode)).withLatestFrom(
      this.store.select('postcode'),
      (paramPostcode, statePostcode) => {
        if (statePostcode === null || statePostcode !== paramPostcode) {
          store.dispatch(new fromPostcode.Update(paramPostcode));
        }
      }
    ).subscribe();
  }

  ngOnInit() {
  }

}
