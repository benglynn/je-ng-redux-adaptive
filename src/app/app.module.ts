import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/module';
import { CoreModule } from './core/module';
import { RoutingModule } from './routing/module';
import { AreaModule } from './area/module';
import { RestaurantsModule } from './restaurants/module';
import { AdaptResultViewModule} from './adapt-result-view/module';
import { REDUCERS, reducers } from './app.reducers';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    StoreModule,
    CoreModule,
    RestaurantsModule,
    AreaModule,
    AdaptResultViewModule
  ],
  providers: [{ provide: REDUCERS, useValue: reducers }],
  bootstrap: [AppComponent]
})
export class AppModule {}
