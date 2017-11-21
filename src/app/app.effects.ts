import { InjectionToken, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from './store/store';
import { IAction } from './app.reducers';
import { IRestaurantsEffects, restaurantsEffects
} from './restaurants/effects';
import { ICoreEffects, coreEffects } from './core/effects';
import { IAdaptServiceEffects, adaptServiceEffects } from './adapt-service/effects';

export type IEffect<T extends IAction> = (
  action: T,
  store: Store,
  injector: Injector
) => Observable<boolean>;

export interface IEffects extends
  IRestaurantsEffects,
  ICoreEffects,
  IAdaptServiceEffects {}

export type IEffectName = keyof IEffects;

export const effects: IEffects = {
  ...restaurantsEffects,
  ...coreEffects,
  ...adaptServiceEffects,
};

export const EFFECTS = new InjectionToken<IEffects>('effects');
