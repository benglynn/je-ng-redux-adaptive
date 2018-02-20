import { AreaReducer } from './reducers/area-reducer';
import { Reducible } from '../store/reducible';
import { PostcodeOrNull } from './postcode-or-null';

export interface AreaState extends Reducible<AreaReducer> {
  postcode: PostcodeOrNull;
}
