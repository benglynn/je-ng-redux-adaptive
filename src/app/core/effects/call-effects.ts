import { Injector } from '@angular/core';
import { Store } from '../../store/store';
import { State } from '../../store/state';
import { Actionable } from '../../store/actionable';
import { EffectFunc } from '../../store/effect-func';
import { effectCall } from './effect-call';

export const callEffects = (state: State, action: Actionable, store: Store, injector: Injector) => {
  const effect = state.core.effects[action.actionType];
  if (effect !== undefined ) {
    effectCall(effect)(action, store, injector);
  }
};
