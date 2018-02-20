import { View } from '../../app.views';
import { ResultComponent } from './result.component';

export interface IRestaurantsViews {
  resultView: View;
}

export const restaurantsViews: IRestaurantsViews = {
  resultView: ResultComponent,
};

