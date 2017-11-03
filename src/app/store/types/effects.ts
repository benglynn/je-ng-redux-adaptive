import { IActionX } from '.';
import { Injector } from '@angular/core';

export type IEffectX = (action: IActionX, injector: Injector) => void

export type IEffectsX = {
  [name: string]: IEffectX
}
