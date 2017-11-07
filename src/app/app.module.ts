import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { StoreModule } from './store/module';
import { CoreModule } from './core/module';
import { AreaModule } from './area/module';
import { RestaurantModule } from './restaurant/module';
import { RestaurantsModule } from './restaurants/module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { /*enableTracing: true*/ }),
    StoreModule,
    CoreModule,
    AreaModule,
    RestaurantModule,
    RestaurantsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
