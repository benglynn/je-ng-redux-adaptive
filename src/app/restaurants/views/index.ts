import { Viewable } from '../../presentation/viewable';
import { ResultComponent } from './result.component';

export interface IRestaurantsViews {
  resultView: Viewable;
}

export const restaurantsViews: IRestaurantsViews = {
  resultView: ResultComponent,
};

