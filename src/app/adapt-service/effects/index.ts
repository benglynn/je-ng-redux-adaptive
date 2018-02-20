import { EffectFunc } from '../../store/effect-func';
import { NavigationStartAction } from '../../routing/actions/navigation-start-action';
import { newLoadRestaurantsEffect } from './new-load-restaurants.effect';

export interface IAdaptServiceEffects {
  newLoadRestaurantsEffect: EffectFunc<NavigationStartAction>;
}

export const adaptServiceEffects: IAdaptServiceEffects = {
  newLoadRestaurantsEffect: newLoadRestaurantsEffect
};
