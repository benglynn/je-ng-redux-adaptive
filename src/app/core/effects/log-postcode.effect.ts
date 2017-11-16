import { UpdateAreaAction } from '../../area/actions';
import { IEffect } from '../../store/types';
import { Observable } from 'rxjs/Observable';

export const logPostcodeEffect: IEffect<UpdateAreaAction> =  (
  action: UpdateAreaAction
): Observable<boolean> => {

  const postcode = action.payload;
  console.log('postcode effect', postcode);
  return Observable.of(true);
};
