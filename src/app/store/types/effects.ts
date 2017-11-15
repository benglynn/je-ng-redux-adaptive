import { IAction } from '.';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export type IEffect = (action: IAction, injector: Injector
) => Observable<boolean>;

export interface IEffects {
  [name: string]: IEffect;
}
