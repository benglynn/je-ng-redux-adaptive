import { AreaComponent } from './area.component';
import { IView } from '../../store/types';

export interface IAreaViews {
  areaView: IView;
}

export const areaViews: IAreaViews = {
  areaView: AreaComponent,
};
