import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from '../logger.service';

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
  isAppStateVisible = true;

  constructor( public store: Store, private loggerService: LoggerService ) {
    this.filteredState$ = this.store.state$
      .map(state => Object.entries(state)
      .reduce((prev, [name, value], index) =>
        (name === 'configuration') ? prev : Object.assign(prev, {[name]: value}),
        {})
    );
    this.config$ = this.store.select('configuration');
    this.loggerService.subscribe(msg => this.trace = `${msg}\n` + this.trace);
  }
}


