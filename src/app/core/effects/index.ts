import { IEffect } from '../../store/types';
import { UpdateAreaAction } from '../../area/actions';
import { logPostcodeEffect } from './log-postcode.effect';

export interface ICoreEffects {
  logPostcodeEffect: IEffect<UpdateAreaAction>;
}

export type ICoreEffectName = keyof ICoreEffects;

export const coreEffects = {
  logPostcodeEffect: logPostcodeEffect
};
