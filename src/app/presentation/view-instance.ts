import { Viewable } from './viewable';
import { View } from './view';
import { HomeComponent } from '../core/views/home.component';
import { Error404Component } from '../core/views/error404.component';
import { AreaComponent } from '../area/views/area.component';
import { ResultComponent } from '../restaurants/views/result.component';
import { NewResultComponent } from '../adaptations/adapt-result-view/views/new-result.component';
import { NewComponent } from '../adaptations/adapt-routes/views/new.component';

export const viewInstance = (view: View): Viewable => {
 switch (view) {
  case View.homeView:
  return HomeComponent;
  case View.error404View:
  return Error404Component;
  case View.areaView:
  return AreaComponent;
  case View.resultView:
  return ResultComponent;
  case View.newResultView:
  return NewResultComponent;
  case View.newView:
  return NewComponent;
 }
 return noCaseFor(view);
};

function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }
