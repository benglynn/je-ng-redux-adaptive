import { IEffect } from '../../app.effects';
import { NavigationStartAction } from '../../routing/actions';
import { newLoadRestaurantsEffect } from './new-load-restaurants.effect';

export interface IAdaptServiceEffects {
  newLoadRestaurantsEffect: IEffect<NavigationStartAction>;
}

export const adaptServiceEffects: IAdaptServiceEffects = {
  newLoadRestaurantsEffect: newLoadRestaurantsEffect
};
