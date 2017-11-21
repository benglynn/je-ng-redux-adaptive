import { NewHomeComponent } from './new-home.component';
import { IView } from '../../app.views';

export interface IAdaptRoutesViews {
  newHomeView: IView;
}

export const adaptRoutesViews: IAdaptRoutesViews = {
  newHomeView: NewHomeComponent,
};
