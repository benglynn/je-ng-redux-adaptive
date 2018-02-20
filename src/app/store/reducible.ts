import { Action } from './action';

export interface Reducible<SliceReducer> {
  reducers: {[_ in Action]?: SliceReducer};
}
