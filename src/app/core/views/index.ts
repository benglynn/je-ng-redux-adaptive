import { HomeComponent } from './home.component';
import { Error404Component } from './error404.component';
import { IView } from '../../store/types';

export interface ICoreViews {
  homeView: IView;
  error404View: IView;
}

export const coreViews: ICoreViews = {
  homeView: HomeComponent,
  error404View: Error404Component,
};
