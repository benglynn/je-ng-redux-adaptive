import { NewResultComponent } from './new-result.component';
import { View } from '../../app.views';

export interface IAdaptResultsViewViews {
  newResultView: View;
}

export const adaptRresultViewViews: IAdaptResultsViewViews = {
  newResultView: NewResultComponent,
};
