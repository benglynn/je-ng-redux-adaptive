import { Component } from '@angular/core';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor( public store: Store ) {}

  onTapAdapt() {
    this.store.dispatch({type: 'INIT_ADAPT_RESULT_VIEW'});
  }
}
