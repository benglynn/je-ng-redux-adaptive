import { Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IRestaurantsState, RemoveRestaurants } from '../../restaurants';
import { IConfigurationState } from '../../app.configuration';
import { IAreaState } from '../state';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnDestroy {

  area$: Observable<IAreaState>;
  restaurants$: Observable<IRestaurantsState>;
  resultViewName$: Observable<string>;

  constructor( private store: Store ) {
    this.area$ = store.select('area');
    this.restaurants$ = store.select('restaurants');
    this.resultViewName$ = store.select('configuration')
      .map(config => config.restaurants.views.resultView);
  }

  ngOnDestroy() {
    this.store.dispatch(new RemoveRestaurants());
  }
}
