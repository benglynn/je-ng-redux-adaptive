import { CoreReducerFunc } from './core-reducer-func';
import { CoreState } from '../state';
import { UpdateIsAdaptedAction } from '../actions/update-is-adapted-action';

export const updateIsAdapatedReducer: CoreReducerFunc = (
  action: UpdateIsAdaptedAction, state: CoreState
): CoreState => {
  return { ...state, isAdapted: action.payload };
};
