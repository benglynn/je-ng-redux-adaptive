import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreX } from '../../store/store';
import * as fromReducers from '../../reducers';
import * as fromPostcode from '../../reducers/postcode';
import { UpdatePostcode } from '../../postcode/actions';
import { LoadRestaurants } from '../../restaurants/actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/mergemap';
import * as fromRestaurants from '../../reducers/restaurants';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.css']
})
export class AreaContainerComponent implements OnInit, OnDestroy {

  restaurants$: Observable<fromRestaurants.State>;
  postcode$: Observable<string>;
  restaurantStatus = fromRestaurants.Status;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromReducers.State>,
    private restaurantService: RestaurantService,
    private storex: StoreX
  ) {
    this.postcode$ = store.select('postcode');
    this.restaurants$ = store.select('restaurants');

    route.params.map(p => String(p.postcode)).withLatestFrom(
      this.store.select('postcode'),
      (paramPostcode, statePostcode) => {
        if (statePostcode === null || statePostcode !== paramPostcode) {
          this.store.dispatch(new fromPostcode.Update(paramPostcode));
          this.storex.dispatch(new UpdatePostcode(paramPostcode));
        }
      }
    ).subscribe();

    this.postcode$.subscribe(postcode => {
      this.store.dispatch(new fromRestaurants.LoadRestaurants(postcode));
      this.storex.dispatch(new LoadRestaurants(postcode));
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new fromRestaurants.RemoveRestaurants());
  }

  ngOnInit() {
  }

}
