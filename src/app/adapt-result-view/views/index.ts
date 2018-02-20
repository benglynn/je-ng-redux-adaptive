import { NewResultComponent } from './new-result.component';
import { Viewable } from '../../presentation/viewable';

export interface IAdaptResultsViewViews {
  newResultView: Viewable;
}

export const adaptRresultViewViews: IAdaptResultsViewViews = {
  newResultView: NewResultComponent,
};
