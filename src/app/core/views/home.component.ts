import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IAreaState } from '../../area/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  area$: Observable<IAreaState>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
  }

}


