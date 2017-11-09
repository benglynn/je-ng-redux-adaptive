import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IView } from '.';

export type IResolver = (url: string, injector: Injector) => Observable<IView>;

export interface IResolvers {
  [name: string]: IResolver;
}
