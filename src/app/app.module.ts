import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { appRoutes, restaurantMatcher } from './routes';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { ErrorPage404Component } from './error-page-404/error-page-404.component';
import { AreaPageComponent } from './area-page/area-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RestaurantPageComponent,
    ErrorPage404Component,
    AreaPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {}// enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
