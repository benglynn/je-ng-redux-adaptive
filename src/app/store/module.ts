import { NgModule } from '@angular/core';
import { StoreX } from './store';
import { INITIAL_STATE } from './tokens';
import { initialStateX } from './types';
import { Registry } from './registry';

@NgModule({
  providers: [
    { provide: INITIAL_STATE, useValue: initialStateX },
    Registry,
    StoreX
  ]
})
export class StoreModule {}
