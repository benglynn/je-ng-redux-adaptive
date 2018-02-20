import { AreaComponent } from './area.component';
import { Viewable } from '../../presentation/viewable';

export interface IAreaViews {
  areaView: Viewable;
}

export const areaViews: IAreaViews = {
  areaView: AreaComponent,
};
