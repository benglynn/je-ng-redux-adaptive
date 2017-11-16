import { NgModule } from '@angular/core';
import { Store } from './store';
import { INITIAL_STATE } from './tokens';
import { initialState } from '../initial-state';

@NgModule({
  providers: [
    { provide: INITIAL_STATE, useValue: initialState },
    Store
  ]
})
export class StoreModule {}
