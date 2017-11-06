import { IAction } from '.';
import { Injector } from '@angular/core';

export type IEffect = (action: IAction, injector: Injector) => void;

export interface IEffects {
  [name: string]: IEffect;
}
