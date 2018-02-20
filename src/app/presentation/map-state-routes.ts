import { Route, Routes, UrlSegment } from '@angular/router';
import { CoreState } from '../core/state/core-state';
import { GuardRoute } from './guard-route.service';
import { RouteActionService } from './route-action.service';
import { Viewable } from '../presentation/viewable';
import { View } from '../presentation/view';
import { viewInstance } from '../presentation/view-instance';

export const regexMatcher = (pattern) => {
  return function(url: UrlSegment[]) {
    const urlString = url.join('/');
    const regex = new RegExp(pattern, 'i');
    return urlString.match(regex) !== null ?
      { consumed: url } : null;
  };
};

export const mapStateRoutes = (coreSlice: CoreState): Routes => {
  const error404View = viewInstance(View.error404View);
  return coreSlice.routes.map(routeConfig => {
    const view = viewInstance(routeConfig.view) as Viewable;
    const matcher = regexMatcher(routeConfig.pattern);
    return <Route>{
      matcher: matcher,
      component: view,
      data: routeConfig,
      canActivate: [ GuardRoute ]
    };
  }).concat(<Route>{ path: '**', component: error404View, canActivate: [ GuardRoute ] });
};
