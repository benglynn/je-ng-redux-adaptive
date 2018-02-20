import { EffectFunc } from '../../../store/effect-func';
import { NavigationStartAction } from '../../../presentation/actions/navigation-start-action';
import { newLoadRestaurantsEffect } from './new-load-restaurants.effect';

export interface IAdaptServiceEffects {
  newLoadRestaurantsEffect: EffectFunc;
}

export const adaptServiceEffects: IAdaptServiceEffects = {
  newLoadRestaurantsEffect: newLoadRestaurantsEffect
};
