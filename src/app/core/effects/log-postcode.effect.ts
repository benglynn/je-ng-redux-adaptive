import { UpdateAreaAction } from '../../area/actions';
import { Effect } from '../../app.effects';
import { Observable } from 'rxjs/Observable';

export const logPostcodeEffect: Effect<UpdateAreaAction> =  (
  action: UpdateAreaAction
): Observable<boolean> => {

  const postcode = action.payload;
  console.log('postcode effect', postcode);
  return Observable.of(true);
};
