import { IEffect } from '../../app.effects';
import { NavigationStartAction } from '../../routing/actions';
import { loadRestaurantsEffect } from './load-restaurants.effect';

export interface IRestaurantsEffects {
  loadRestaurantsEffect: IEffect<NavigationStartAction>;
}

export type IRestaurantsEffectName = keyof IRestaurantsEffects;

export const restaurantsEffects = {
  loadRestaurantsEffect: loadRestaurantsEffect
};
