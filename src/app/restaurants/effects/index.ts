import { EffectFunc } from '../../store/effect-func';
import { NavigationStartAction } from '../../presentation/actions/navigation-start-action';
import { loadRestaurantsEffect } from '../../core/effects/load-restaurants.effect';

export interface IRestaurantsEffects {
  loadRestaurantsEffect: EffectFunc;
}

export type IRestaurantsEffectName = keyof IRestaurantsEffects;

export const restaurantsEffects = {
  loadRestaurantsEffect: loadRestaurantsEffect
};
