import { Component } from '@angular/core';
import { Store } from './store/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/take';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ICoreState } from './core/state';
import { UpdateIsDebuggingAction } from './core/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  private core$: Observable<ICoreState>;
  isDebugging$: Observable<boolean>;
  isAdapted$: Observable<boolean>;

  constructor( private store: Store ) {
    this.core$ = this.store.select('core');
    this.isAdapted$ = this.core$.pluck('isAdapted');
    this.isDebugging$ = this.core$.pluck('isDebugging');
  }

  tapDebugOpen() {
    this.store.dispatch(new UpdateIsDebuggingAction(true));
  }
  tapDebugClose() {
    this.store.dispatch(new UpdateIsDebuggingAction(false));
  }

}
