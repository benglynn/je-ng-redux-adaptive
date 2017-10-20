import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export type EffectCoreFn = (Action) => Observable<Action>;


export interface EffectCore {
  name: string;
  fn: EffectCoreFn;
}

@Injectable()
export class EffectCores {
  store$ = new ReplaySubject<EffectCore>();
  register(name: string, fn: EffectCoreFn) {
    this.store$.next({name: name, fn: fn});
  }
}
