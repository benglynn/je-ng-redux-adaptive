import { UpdateAreaAction } from '../../area/actions/update-area-action';
import { EffectFunc } from '../../store/effect-func';
import { Observable } from 'rxjs/Observable';

export const logPostcodeEffect: EffectFunc<UpdateAreaAction> =  (
  action: UpdateAreaAction
): Observable<boolean> => {

  const postcode = action.payload;
  console.log('postcode effect', postcode);
  return Observable.of(true);
};
