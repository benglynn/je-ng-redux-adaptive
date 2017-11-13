import { Component } from '@angular/core';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor( private store: Store ) {}

  onTapAdapt() {
    this.store.dispatch({type: 'INIT_ADAPTATION_SWAP_RESULT_VIEW'});
  }
}
