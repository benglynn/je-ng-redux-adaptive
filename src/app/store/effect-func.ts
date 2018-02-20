import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from './store';
import { Actionable } from './actionable';

export type EffectFunc = (
  action: Actionable,
  store: Store,
  injector: Injector
) => Observable<boolean>;
