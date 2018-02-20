import { AreaComponent } from './area.component';
import { View } from '../../app.views';

export interface IAreaViews {
  areaView: View;
}

export const areaViews: IAreaViews = {
  areaView: AreaComponent,
};
