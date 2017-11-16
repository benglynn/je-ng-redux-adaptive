import { NgModule } from '@angular/core';
import { NewResultComponent } from './views/new-result.component';

@NgModule({
  declarations: [ NewResultComponent ],
  exports: [ NewResultComponent ],
  entryComponents: [ NewResultComponent ]
})
export class AdaptResultViewModule {}
