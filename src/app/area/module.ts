import { NgModule } from '@angular/core';
import { Registry } from '../store/registry';
import { reducers } from './reducers';

@NgModule({})
export class AreaModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
  }
}
