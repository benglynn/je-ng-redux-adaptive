import { HomeComponent } from './home.component';
import { Error404Component } from './error404.component';
import { View } from '../../app.views';

export interface ICoreViews {
  homeView: View;
  error404View: View;
}

export const coreViews: ICoreViews = {
  homeView: HomeComponent,
  error404View: Error404Component,
};
