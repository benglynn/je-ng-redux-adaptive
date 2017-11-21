import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAreaState } from '../../area/state';
import { Store } from '../../store/store';

@Component({
  templateUrl: './error404.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component {

  area$: Observable<IAreaState>;

  constructor( private store: Store ) {
    this.area$ = store.select('area');
  }
}


