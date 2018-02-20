import { HomeComponent } from './home.component';
import { Error404Component } from './error404.component';
import { Viewable } from '../../presentation/viewable';

export interface ICoreViews {
  homeView: Viewable;
  error404View: Viewable;
}

export const coreViews: ICoreViews = {
  homeView: HomeComponent,
  error404View: Error404Component,
};
