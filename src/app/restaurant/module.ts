import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantContainerComponent
  } from './restaurant-container/restaurant-container.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ RestaurantContainerComponent ]
})
export class RestaurantModule {}
