import { NewResultComponent } from './new-result.component';
import { IView } from '../../app.views';

export interface IAdaptResultsViewViews {
  newResultView: IView;
}

export const adaptRresultViewViews: IAdaptResultsViewViews = {
  newResultView: NewResultComponent,
};
