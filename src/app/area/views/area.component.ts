import { Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IRestaurantsState, RemoveRestaurants } from '../../restaurants';
import { IConfigurationState } from '../../app.configuration';
import { IAreaState } from '../state';
import { IRestaurant } from '../../restaurant';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnDestroy {

  area$: Observable<IAreaState>;
  restaurants$: Observable<IRestaurant[]>;
  openRestaurants$: Observable<IRestaurant[]>;
  closedRestaurants$: Observable<IRestaurant[]>;
  resultViewName$: Observable<string>;

  constructor( private store: Store ) {
    this.area$ = store.select('area');
    this.restaurants$ = store.select('restaurants')
      .filter(state => state.data != null)
      .map(state => state.data as IRestaurant[]);
    this.openRestaurants$ = this.restaurants$
      .map(restaurants => restaurants.filter(restaurant => restaurant.isOpen));
    this.closedRestaurants$ = this.restaurants$
    .map(restaurants => restaurants.filter(restaurant => !restaurant.isOpen));



    this.resultViewName$ = store.select('configuration')
      .map(config => config.restaurants.views.resultView);
  }

  ngOnDestroy() {
    this.store.dispatch(new RemoveRestaurants());
  }
}
