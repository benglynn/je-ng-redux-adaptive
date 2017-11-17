import { AreaComponent } from './area.component';
import { IView } from '../../app.views';

export interface IAreaViews {
  areaView: IView;
}

export const areaViews: IAreaViews = {
  areaView: AreaComponent,
};
