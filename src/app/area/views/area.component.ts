import { Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IRestaurantsState } from '../../restaurants';
import { IConfigurationState } from '../../configuration';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent {

  area$: Observable<string>;
  restaurants$: Observable<IRestaurantsState>;
  resultViewName$: Observable<string>;

  constructor( private store: Store ) {
    this.area$ = store.select('area');
    this.restaurants$ = store.select('restaurants');
    this.resultViewName$ = store.select('configuration')
      .map(config => config.restaurants.views.resultView);
  }
}
