import { NgModule } from '@angular/core';
import { Registry } from '../store/registry';
import { reducers } from './reducers';

@NgModule({})
export class RestaurantsModule {
  constructor(private registry: Registry) {
    console.log('restaurnat module loaded');
    Object.keys(reducers).forEach(name => this.registry
      .registerReducer(name, reducers[name]));
  }
}
