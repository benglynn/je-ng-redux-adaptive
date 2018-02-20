import { Effect } from '../../store/effect';
import { NavigationStartAction } from '../../routing/actions';
import { loadRestaurantsEffect } from './load-restaurants.effect';

export interface IRestaurantsEffects {
  loadRestaurantsEffect: Effect<NavigationStartAction>;
}

export type IRestaurantsEffectName = keyof IRestaurantsEffects;

export const restaurantsEffects = {
  loadRestaurantsEffect: loadRestaurantsEffect
};
