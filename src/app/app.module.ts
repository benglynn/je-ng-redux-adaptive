import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './core/home-container/home-container.component';
import { RestaurantContainerComponent } from './restaurant/restaurant-container/restaurant-container.component';
import { ErrorContainerComponent } from './core/error-container/error-container.component';
import { AreaContainerComponent } from './area/area-container/area-container.component';
import { RestaurantsService } from './restaurants';
import { StoreModule as StoreModuleX } from './store/module';
import { AreaModule } from './area/module';
import { RestaurantsModule } from './restaurants/module';

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
    StoreModuleX,
    AreaModule,
    RestaurantsModule
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
