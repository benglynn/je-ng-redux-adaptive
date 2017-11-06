import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreX } from '../../store/store';
import { Subscription } from 'rxjs/Subscription';
import { UpdatePostcode } from '../../postcode/actions';
import { LoadRestaurants, RemoveRestaurants } from '../../restaurants/actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/mergemap';
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

  restaurantsX$: Observable<RestaurantState>;
  postcodeX$: Observable<PostcodeState>;
  restaurantsStatus = RestaurantsStatus;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private storex: StoreX
  ) {
    this.postcodeX$ = storex.select('postcode');
    this.restaurantsX$ = storex.select('restaurants');

    const paramCheckSubscription = route.params
      .map(p => String(p.postcode)).withLatestFrom(
        this.storex.select('postcode'),
        (paramPostcode, statePostcode) => {
          if (statePostcode === null || statePostcode !== paramPostcode) {
            this.storex.dispatch(new UpdatePostcode(paramPostcode));
          }
        }
      ).subscribe();
    this.subscriptions.push(paramCheckSubscription);

    const loadRestaurantsSubscription = this.postcodeX$.subscribe(postcode => {
      this.storex.dispatch(new LoadRestaurants(postcode));
    });
    this.subscriptions.push(loadRestaurantsSubscription);
  }

  ngOnDestroy() {
    this.storex.dispatch(new RemoveRestaurants());
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit() {
  }

}
