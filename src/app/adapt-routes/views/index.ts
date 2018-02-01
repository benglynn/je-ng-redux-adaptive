import { NewComponent } from './new.component';
import { IView } from '../../app.views';

export interface IAdaptRoutesViews {
  newView: IView;
}

export const adaptRoutesViews: IAdaptRoutesViews = {
  newView: NewComponent,
};
