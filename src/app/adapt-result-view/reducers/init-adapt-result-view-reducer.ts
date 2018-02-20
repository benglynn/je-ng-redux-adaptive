import { Actionable } from '../../store/actionable';
import { CoreState } from '../../core/state/core-state';
import { CoreReducerFunc } from '../../core/reducers/core-reducer-func';
import { View } from '../../presentation/view';

export const initAdaptResultViewReducer: CoreReducerFunc = (action: Actionable, state: CoreState
): CoreState => {
  const newState = { ...state };
  newState.views.resultView = View.newResultView;
  return newState;
};
