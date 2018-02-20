import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostcodeOrNull } from '../../area/postcode-or-null';
import { Store } from '../../store/store';

@Component({
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component {

  postcodeOrNull$: Observable<PostcodeOrNull>;

  constructor( private store: Store ) {
    this.postcodeOrNull$ = store.select('area')
      .map(area => area.postcode);
  }
}


