import { NewComponent } from './new.component';
import { Viewable } from '../../presentation/viewable';

export interface IAdaptRoutesViews {
  newView: Viewable;
}

export const adaptRoutesViews: IAdaptRoutesViews = {
  newView: NewComponent,
};
