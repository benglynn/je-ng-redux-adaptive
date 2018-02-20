import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { PostcodeOrNull } from '../../area/postcode-or-null';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  postcodeOrNull$: Observable<PostcodeOrNull>;

  constructor( private store: Store) {
    this.postcodeOrNull$ = store.select('area')
      .map(area => area.postcode);
  }

}


