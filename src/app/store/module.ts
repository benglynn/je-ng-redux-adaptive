import { NgModule } from '@angular/core';
import { Store } from './store';
import { INITIAL_STATE } from './tokens';
import { initialState } from './types';
import { Registry } from './registry';

@NgModule({
  providers: [
    { provide: INITIAL_STATE, useValue: initialState },
    Registry,
    Store
  ]
})
export class StoreModule {}
