import { Effect } from '../../store/effect';
import { NavigationStartAction } from '../../routing/actions/navigation-start-action';
import { loadRestaurantsEffect } from './load-restaurants.effect';

export interface IRestaurantsEffects {
  loadRestaurantsEffect: Effect<NavigationStartAction>;
}

export type IRestaurantsEffectName = keyof IRestaurantsEffects;

export const restaurantsEffects = {
  loadRestaurantsEffect: loadRestaurantsEffect
};
