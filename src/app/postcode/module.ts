import { NgModule } from '@angular/core';
import { Registry } from '../store/registry';
import { reducers } from './reducers';

@NgModule({})
export class PostcodeModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
  }
}
