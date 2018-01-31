import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewResultComponent } from './views/new-result.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ NewResultComponent ],
  exports: [ NewResultComponent ],
  entryComponents: [ NewResultComponent ]
})
export class AdaptResultViewModule {}
