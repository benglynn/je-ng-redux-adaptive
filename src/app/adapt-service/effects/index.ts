import { Effect } from '../../store/effect';
import { NavigationStartAction } from '../../routing/actions/navigation-start-action';
import { newLoadRestaurantsEffect } from './new-load-restaurants.effect';

export interface IAdaptServiceEffects {
  newLoadRestaurantsEffect: Effect<NavigationStartAction>;
}

export const adaptServiceEffects: IAdaptServiceEffects = {
  newLoadRestaurantsEffect: newLoadRestaurantsEffect
};
