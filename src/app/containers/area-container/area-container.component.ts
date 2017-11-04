import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
import { StoreX } from '../../store/store';
import { Subscription } from 'rxjs/Subscription';
// import * as fromReducers from '../../reducers';
// import * as fromPostcode from '../../reducers/postcode';
import { UpdatePostcode } from '../../postcode/actions';
import { LoadRestaurants, RemoveRestaurants } from '../../restaurants/actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/mergemap';
// import * as fromRestaurants from '../../reducers/restaurants';
import { Restaurant } from '../../models/restaurant';
import { State as RestaurantState, Status as RestaurantsStatus } from '../../restaurants';
import { State as PostcodeState } from '../../postcode';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.css']
})
export class AreaContainerComponent implements OnInit, OnDestroy {

  // restaurants$: Observable<fromRestaurants.State>;
  restaurantsX$: Observable<RestaurantState>;
  // postcode$: Observable<string>;
  postcodeX$: Observable<PostcodeState>;
  // restaurantStatus = fromRestaurants.Status;
  restaurantsStatus = RestaurantsStatus
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    // private store: Store<fromReducers.State>,
    private restaurantService: RestaurantService,
    private storex: StoreX
  ) {
    // this.postcode$ = store.select('postcode');
    this.postcodeX$ = storex.select('postcode');
    // this.restaurants$ = store.select('restaurants');
    this.restaurantsX$ = storex.select('restaurants');

    const paramCheckSubscription = route.params
      .map(p => String(p.postcode)).withLatestFrom(
        this.storex.select('postcode'),
        (paramPostcode, statePostcode) => {
          if (statePostcode === null || statePostcode !== paramPostcode) {
            // this.store.dispatch(new fromPostcode.Update(paramPostcode));
            this.storex.dispatch(new UpdatePostcode(paramPostcode));
          }
        }
      ).subscribe();
    this.subscriptions.push(paramCheckSubscription);

    const loadRestaurantsSubscription = this.postcodeX$.subscribe(postcode => {
      // this.store.dispatch(new fromRestaurants.LoadRestaurants(postcode));
      this.storex.dispatch(new LoadRestaurants(postcode));
    });
    this.subscriptions.push(loadRestaurantsSubscription);
  }

  ngOnDestroy() {
    // this.store.dispatch(new fromRestaurants.RemoveRestaurants());
    this.storex.dispatch(new RemoveRestaurants());
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit() {
  }

}
