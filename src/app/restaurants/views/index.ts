import { IView } from '../../store/types';
import { ResultComponent } from './result.component';

export interface IRestaurantsViews {
  resultView: IView;
}

export const restaurantsViews: IRestaurantsViews = {
  resultView: ResultComponent,
};

