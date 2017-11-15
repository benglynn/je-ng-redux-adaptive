import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsoleComponent {

  filteredState$: Observable<any>;
  config$: Observable<any>;
  trace = '';
  adaptedView = false;
  isAppStateVisible = true;

  constructor( public store: Store ) {
    this.filteredState$ = this.store.state$
      .map(state => Object.entries(state)
      .reduce((prev, [name, value], index) =>
        (name === 'configuration') ? prev : Object.assign(prev, {[name]: value}),
        {})
    );
    this.config$ = this.store.select('configuration');
    this.store.action$.subscribe(action =>
      this.trace = `${action.type} ${action.payload || ''}\n` + this.trace);
  }

  onTapAdaptView() {
    this.store.dispatch({type: 'INIT_ADAPT_RESULT_VIEW'});
    this.adaptedView = true;
  }
}


