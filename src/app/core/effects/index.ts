import { Effect } from '../../store/effect';
import { UpdateAreaAction } from '../../area/actions/update-area-action';
import { logPostcodeEffect } from './log-postcode.effect';

export interface ICoreEffects {
  logPostcodeEffect: Effect<UpdateAreaAction>;
}

export type ICoreEffectName = keyof ICoreEffects;

export const coreEffects = {
  logPostcodeEffect: logPostcodeEffect
};
