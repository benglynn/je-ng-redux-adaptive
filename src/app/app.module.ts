import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, initialState } from './reducers';
import { appRoutes, restaurantMatcher } from './routes';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RestaurantContainerComponent } from './containers/restaurant-container/restaurant-container.component';
import { ErrorContainerComponent } from './containers/error-container/error-container.component';
import { AreaContainerComponent } from './containers/area-container/area-container.component';
import { RestaurantService } from './services/restaurant.service';
import { EffectsModule } from '@ngrx/effects';
import { EffectCores } from './effects';
import { RestaurantEffects } from './effects/restaurants';

// StoreX
import { StoreModule as StoreModuleX } from './store/module';
import * as fromPostcode from './postcode';

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
    StoreModule.forRoot(reducers, {
      initialState: initialState, metaReducers: metaReducers }),
    EffectsModule.forRoot([RestaurantEffects]),
    StoreModuleX.forRoot({
      postcode: fromPostcode.initialState
    })
  ],
  providers: [EffectCores, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
