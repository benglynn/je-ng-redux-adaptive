import { IActionX } from '.';
import { Injector } from '@angular/core';

export type IEffectsX = {
  [name: string]: (action: IActionX, injector: Injector) => void
}
