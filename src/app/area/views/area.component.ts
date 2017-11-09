import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent {

  area$: Observable<string>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
  }

}
