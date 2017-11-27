import { Component } from '@angular/core';
import { Store } from './store/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/take';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

    isAdapted: Observable<boolean>;

  constructor( private store: Store ) {
    this.isAdapted = this.store.select('core').pluck('isAdapted');

    this.store.select('core')
      .pluck('isAdapted')
      .filter(value => value === true)
      .take(1)
      .subscribe(isAdapted => {
      console.log('is adapted is:', isAdapted);
    });
  }

}
