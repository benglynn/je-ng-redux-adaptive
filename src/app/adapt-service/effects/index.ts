import { Effect } from '../../app.effects';
import { NavigationStartAction } from '../../routing/actions';
import { newLoadRestaurantsEffect } from './new-load-restaurants.effect';

export interface IAdaptServiceEffects {
  newLoadRestaurantsEffect: Effect<NavigationStartAction>;
}

export const adaptServiceEffects: IAdaptServiceEffects = {
  newLoadRestaurantsEffect: newLoadRestaurantsEffect
};
