import { NgModule } from '@angular/core';
import { Registry } from '../store/registry';
import { NewResultComponent } from './views/new-result.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [ NewResultComponent ],
  exports: [ NewResultComponent ],
  entryComponents: [ NewResultComponent ]
})
export class AdaptationModule {
  constructor( private registry: Registry ) {
    this.registry.registerReducers(reducers);
    this.registry.registerViews({
      'newResultView': NewResultComponent
    });
  }
}
