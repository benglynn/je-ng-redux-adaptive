import { Route, Routes, UrlSegment } from '@angular/router';
import { ICoreState } from '../core/state';
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
  coreSlice: ICoreState, views: IViews
): Routes => {
    return coreSlice.routes.map(routeConfig => {
      const view = views[routeConfig.viewName] as IView;
      const matcher = regexMatcher(routeConfig.pattern);
      return <Route>{
        matcher: matcher,
        component: view,
        data: routeConfig,
        canActivate: [ GuardRoute ]
      };
    }
  ).concat(<Route>{ path: '**', component: views['error404View'], canActivate: [ GuardRoute ] });
};
