import { NgModule } from '@angular/core';
import { Registry } from '../store/registry';
import { NewResultComponent } from './views/new-result.component';

@NgModule({
  declarations: [ NewResultComponent ],
  exports: [ NewResultComponent ],
  entryComponents: [ NewResultComponent ]
})
export class AdaptResultViewModule {
  constructor( private registry: Registry ) {
    this.registry.registerViews({
      'newResultView': NewResultComponent
    });
  }
}
