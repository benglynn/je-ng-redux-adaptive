import { EffectFunc } from '../../store/effect-func';
import { UpdateAreaAction } from '../../area/actions/update-area-action';
import { logPostcodeEffect } from './log-postcode.effect';

export interface ICoreEffects {
  logPostcodeEffect: EffectFunc<UpdateAreaAction>;
}

export type ICoreEffectName = keyof ICoreEffects;

export const coreEffects = {
  logPostcodeEffect: logPostcodeEffect
};
