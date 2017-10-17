import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

import { appRoutes, restaurantMatcher } from './routes';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RestaurantContainerComponent } from './containers/restaurant-container/restaurant-container.component';
import { ErrorContainerComponent } from './containers/error-container/error-container.component';
import { AreaContainerComponent } from './containers/area-container/area-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    RestaurantContainerComponent,
    ErrorContainerComponent,
    AreaContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { /*enableTracing: true*/ }),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
