import { AreaState } from './area-state';
import { AreaReducer } from './reducers/area-reducer';

export const initialAreaState: AreaState = {
  postcode: null,
  reducers: {
    updateAreaAction: AreaReducer.updateAreaReducer,
  }
};
