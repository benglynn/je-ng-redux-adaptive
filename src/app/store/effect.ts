import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from './store';
import { Actionable } from './actionable';

export type Effect<T extends Actionable> = (
  action: T,
  store: Store,
  injector: Injector
) => Observable<boolean>;
