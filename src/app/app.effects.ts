import { InjectionToken, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from './store/store';
import { Actionable } from './store/actionable';
import { IRestaurantsEffects, restaurantsEffects
} from './restaurants/effects';
import { ICoreEffects, coreEffects } from './core/effects';
import { IAdaptServiceEffects, adaptServiceEffects } from './adapt-service/effects';

export interface Effects extends
  IRestaurantsEffects,
  ICoreEffects,
  IAdaptServiceEffects {}

export type IEffectName = keyof Effects;

export const effects: Effects = {
  ...restaurantsEffects,
  ...coreEffects,
  ...adaptServiceEffects,
};

export const EFFECTS = new InjectionToken<Effects>('effects');
