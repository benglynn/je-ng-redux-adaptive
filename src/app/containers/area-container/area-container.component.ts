import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/mergemap';
import { Store } from '../../store/store';
import {
  State as RestaurantState,
  Status as RestaurantsStatus,
  RestaurantsService,
  LoadRestaurants,
  RemoveRestaurants
} from '../../restaurants';
import { AreaState as PostcodeState, UpdateAreaAction } from '../../area';
import { Restaurant } from '../../restaurant';

@Component({
  selector: 'app-area-container',
  templateUrl: './area-container.component.html',
})
export class AreaContainerComponent implements OnInit, OnDestroy {

  restaurants$: Observable<RestaurantState>;
  area$: Observable<PostcodeState>;
  restaurantsStatus = RestaurantsStatus;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
    private store: Store
  ) {
    this.area$ = this.store.select('area');
    this.restaurants$ = this.store.select('restaurants');


    const paramCheckSubscription = route.params
      .map(p => String(p.area)).withLatestFrom(
        this.store.select('area'),
        (paramPostcode, statePostcode) => {
          if (statePostcode === null || statePostcode !== paramPostcode) {
            this.store.dispatch(new UpdateAreaAction(paramPostcode));
          }
        }
      ).subscribe();
    this.subscriptions.push(paramCheckSubscription);

    const loadRestaurantsSubscription = this.area$.subscribe(area => {
      this.store.dispatch(new LoadRestaurants(area));
    });
    this.subscriptions.push(loadRestaurantsSubscription);
  }

  ngOnDestroy() {
    this.store.dispatch(new RemoveRestaurants());
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit() {
  }

}
