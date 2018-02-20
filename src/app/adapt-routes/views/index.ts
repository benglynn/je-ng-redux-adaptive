import { NewComponent } from './new.component';
import { View } from '../../app.views';

export interface IAdaptRoutesViews {
  newView: View;
}

export const adaptRoutesViews: IAdaptRoutesViews = {
  newView: NewComponent,
};
