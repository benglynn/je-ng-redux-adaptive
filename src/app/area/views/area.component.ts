import { Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { RestaurantsState, RemoveRestaurantsAction } from '../../restaurants';
import { IConfigurationState } from '../../app.configuration';
import { PostcodeOrNull } from '../state';
import { Restaurant } from '../../restaurants/restaurant';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnDestroy {

  postcodeOrNull$: Observable<PostcodeOrNull>;
  restaurants$: Observable<Restaurant[]>;
  openRestaurants$: Observable<Restaurant[]>;
  closedRestaurants$: Observable<Restaurant[]>;
  resultViewName$: Observable<string>;

  constructor( private store: Store ) {
    this.postcodeOrNull$ = store.select('area').map(area => area.postcode);
    this.restaurants$ = store.select('restaurants')
      .filter(state => state.data != null)
      .map(state => state.data as Restaurant[]);
    this.openRestaurants$ = this.restaurants$
      .map(restaurants => restaurants.filter(restaurant => restaurant.isOpen));
    this.closedRestaurants$ = this.restaurants$
    .map(restaurants => restaurants.filter(restaurant => !restaurant.isOpen));



    this.resultViewName$ = store.select('configuration')
      .map(config => config.restaurants.views.resultView);
  }

  ngOnDestroy() {
    this.store.dispatch(new RemoveRestaurantsAction());
  }
}
