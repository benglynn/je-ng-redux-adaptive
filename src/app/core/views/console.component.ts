import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from '../logger.service';
import { State } from '../../store/state';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsoleComponent {

  state$: Observable<State>;
  isAppStateVisible = true;

  constructor( public store: Store, private loggerService: LoggerService ) {
    this.state$ = this.store.state$;
  }
}


