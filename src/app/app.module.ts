import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/module';
import { CoreModule } from './core/module';
import { PresentationModule } from './presentation/module';
import { AreaModule } from './area/module';
import { RestaurantsModule } from './restaurants/module';
import { AdaptResultViewModule } from './adaptations/adapt-result-view/module';
import { AdaptRoutesModule } from './adaptations/adapt-routes/module';
import { AdaptServiceModule } from './adaptations/adapt-service/module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule,
    PresentationModule,
    HttpClientModule,
    StoreModule,
    CoreModule,
    RestaurantsModule,
    AreaModule,
    AdaptResultViewModule,
    AdaptRoutesModule,
    AdaptServiceModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
