import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IRestaurantsState } from '../../restaurants';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent {

  area$: Observable<string>;
  restaurants$: Observable<IRestaurantsState>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
    this.restaurants$ = store.select('restaurants');
  }

}
