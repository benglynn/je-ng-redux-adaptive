import { Effect } from './effect';
import { EffectFunc } from '../../store/effect-func';
import { loadRestaurantsEffect } from './load-restaurants.effect';
import { logPostcodeEffect } from './log-postcode.effect';
import { newLoadRestaurantsEffect } from '../../adaptations/adapt-service/effects/new-load-restaurants.effect';

export const effectCall = (effect: Effect): EffectFunc => {
  switch (effect) {
    case Effect.loadRestaurantsEffect:
    return loadRestaurantsEffect;
    case Effect.logPostcodeEffect:
    return logPostcodeEffect;
    case Effect.newLoadRestaurantsEffect:
    return newLoadRestaurantsEffect;
  }
  return noCaseFor(effect);
};

function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }
