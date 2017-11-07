import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Registry } from '../store/registry';
import { reducers } from './reducers';
import { effects } from './effects';
import { RestaurantsService } from '.';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  providers: [ RestaurantsService ]
})
export class RestaurantsModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
    registry.registerEffects(effects);
  }
}
