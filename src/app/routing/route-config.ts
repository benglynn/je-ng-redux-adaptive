import { IViewName } from '../app.views';

export interface RouteConfig {
  pattern: string;
  viewName: IViewName;
  effectName?: string;
}
