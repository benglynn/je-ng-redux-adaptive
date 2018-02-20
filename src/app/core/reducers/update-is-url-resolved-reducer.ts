import { CoreReducer } from './core-reducer';
import { CoreReducerFunc } from './core-reducer-func';
import { UpdateIsUrlResolvedAction } from '../actions/update-is-url-resolved-action';
import { CoreState } from '../state/core-state';


export const updateIsUrlResolvedReducer: CoreReducerFunc = (
  action: UpdateIsUrlResolvedAction, state: CoreState
): CoreState => {
  return { ...state, isUrlResolved: action.payload };
};

