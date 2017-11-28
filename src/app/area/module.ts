import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './views/area.component';
import { RestaurantsModule } from '../restaurants/module';
import { SharedModule } from '../shared/module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RestaurantsModule,
    SharedModule,
  ],
  declarations: [
    AreaComponent
  ],
  entryComponents: [ AreaComponent ]
})
export class AreaModule {}
