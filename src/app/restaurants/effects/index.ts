import { EffectFunc } from '../../store/effect-func';
import { NavigationStartAction } from '../../routing/actions/navigation-start-action';
import { loadRestaurantsEffect } from '../../core/effects/load-restaurants.effect';

export interface IRestaurantsEffects {
  loadRestaurantsEffect: EffectFunc<NavigationStartAction>;
}

export type IRestaurantsEffectName = keyof IRestaurantsEffects;

export const restaurantsEffects = {
  loadRestaurantsEffect: loadRestaurantsEffect
};
