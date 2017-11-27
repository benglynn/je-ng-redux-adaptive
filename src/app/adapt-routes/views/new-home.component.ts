import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { IAreaState } from '../../area/state';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewHomeComponent {

  area$: Observable<IAreaState>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
  }

}


