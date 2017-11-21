import { Routes, UrlSegment } from '@angular/router';
import { IConfigurationState, ISliceConfiguration, IRoutes, IRouteConfig
} from '../app.configuration';
import { GuardRoute } from './guard-route.service';
import { RouteActionService } from './route-action.service';
import { IView, IViews } from '../app.views';

export const regexMatcher = (pattern) => {
  return function(url: UrlSegment[]) {
    const urlString = url.join('/');
    const regex = new RegExp(pattern, 'i');
    return urlString.match(regex) !== null ?
      { consumed: url } : null;
  };
};

export const mapStateRoutes = (
  configuration: IConfigurationState, views: IViews
): Routes => {
  return Object.values(configuration)
    .filter((config: ISliceConfiguration) => config.routes !== undefined)
    .reduce((prev, curr: ISliceConfiguration) => prev.concat(Object.values(curr.routes)), [])
    .map((config: IRouteConfig) => {
      const view = views[config.viewName] as IView;
      const matcher = regexMatcher(config.pattern);
      return {
        matcher: matcher,
        component: view,
        data: config,
        canActivate: [ GuardRoute ]
      };
    }
  ).concat({ path: '**', component: views['error404View'] });
};
