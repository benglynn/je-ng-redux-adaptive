import { Component } from '@angular/core';
import { Store } from './store/store';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  filteredState$: Observable<any>;
  config$: Observable<any>;
  trace = '';
  adaptedView = false;

  constructor( public store: Store ) {
    this.filteredState$ = this.store.state$
      .map(state => Object.entries(state)
      .reduce((prev, [name, value], index) =>
        (name === 'configuration') ? prev : Object.assign(prev, {[name]: value}),
        {})
    );
    this.config$ = this.store.select('configuration');
    this.store.action$.subscribe(action => this.trace += action.type + '\n');
  }

  onTapAdaptView() {
    this.store.dispatch({type: 'INIT_ADAPT_RESULT_VIEW'});
    this.adaptedView = true;
  }
}
