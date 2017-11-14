import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { GuardInitialRoute } from './guard-initial-route.service';
import { GuardRoute } from './guard-route.service';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { /*enableTracing: true*/ }),
  ],
  providers: [ GuardInitialRoute, GuardRoute ]
})
export class RoutingModule {
  constructor() {
    console.log('routing module loads');
  }
}
