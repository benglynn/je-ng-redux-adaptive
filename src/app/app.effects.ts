import { InjectionToken } from '@angular/core';
import { IEffect } from './store/types';
import { IRestaurantsEffects, restaurantsEffects
} from './restaurants/effects';
import { ICoreEffects, coreEffects } from './core/effects';

export interface IEffects extends IRestaurantsEffects, ICoreEffects {}

export const effects: IEffects = {
  ...restaurantsEffects,
  ...coreEffects,
};

export const EFFECTS = new InjectionToken<IEffects>('effects');
