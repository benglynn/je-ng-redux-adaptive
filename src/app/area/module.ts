import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Registry } from '../store/registry';
import { reducers } from './reducers';
import { AreaComponent } from './views/area.component';
import { RestaurantsModule } from '../restaurants/module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RestaurantsModule
  ],
  declarations: [
    AreaComponent
  ],
  entryComponents: [ AreaComponent ]
})
export class AreaModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
    registry.registerViews({'areaView': AreaComponent});
  }
}
