import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IView } from '.';

export type IGuard = (url: string, injector: Injector) => Observable<IView>;

export interface IGuards {
  [name: string]: IGuard;
}
