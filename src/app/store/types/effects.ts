import { IAction } from '.';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '../store';

export type IEffect<T extends IAction> = (
  action: T,
  store: Store,
  injector: Injector
) => Observable<boolean>;
