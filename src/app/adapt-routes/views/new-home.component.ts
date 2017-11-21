import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['../../core/views/home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewHomeComponent {

  area$: Observable<string>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
  }

}


