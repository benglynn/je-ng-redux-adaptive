import { NewResultComponent } from './new-result.component';
import { IView } from '../../store/types';

export interface IAdaptResultsViewViews {
  newResultView: IView;
}

export const adaptRresultViewViews: IAdaptResultsViewViews = {
  newResultView: NewResultComponent,
};
