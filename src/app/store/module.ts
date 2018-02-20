import { NgModule } from '@angular/core';
import { Store } from './store';
import { INITIAL_STATE } from './tokens';
import { initialState } from './initial-state';
import { AdaptationService } from './adaptation.service';

@NgModule({
  providers: [
    { provide: INITIAL_STATE, useValue: initialState },
    Store,
    AdaptationService,
  ]
})
export class StoreModule {
  constructor( private adaptationService: AdaptationService ) {
    this.adaptationService.fetchActions();
  }
}
