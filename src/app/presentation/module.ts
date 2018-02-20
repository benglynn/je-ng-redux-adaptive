import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { GuardInitialRoute } from './guard-initial-route.service';
import { GuardRoute } from './guard-route.service';
import { appRoutes } from './routes';
import { RouteActionService } from './route-action.service';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { /*enableTracing: true*/ }),
  ],
  providers: [ GuardInitialRoute, GuardRoute, RouteActionService ]
})
export class PresentationModule {
  constructor() {}
}
