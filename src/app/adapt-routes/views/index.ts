import { NewHomeComponent } from './new-home.component';
import { NewComponent } from './new.component';
import { IView } from '../../app.views';

export interface IAdaptRoutesViews {
  newHomeView: IView;
  newView: IView;
}

export const adaptRoutesViews: IAdaptRoutesViews = {
  newHomeView: NewHomeComponent,
  newView: NewComponent,
};
