import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/module';
import { CoreModule } from './core/module';
import { RoutingModule } from './routing/module';
import { AreaModule } from './area/module';
import { RestaurantsModule } from './restaurants/module';
import { VIEWS, views } from './app.views';
import { AdaptResultViewModule } from './adapt-result-view/module';
import { AdaptRoutesModule } from './adapt-routes/module';
import { AdaptServiceModule } from './adapt-service/module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    StoreModule,
    CoreModule,
    RestaurantsModule,
    AreaModule,
    AdaptResultViewModule,
    AdaptRoutesModule,
    AdaptServiceModule,
  ],
  providers: [
    { provide: VIEWS, useValue: views },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
