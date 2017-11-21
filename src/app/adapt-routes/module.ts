import { NgModule } from '@angular/core';
import { NewHomeComponent } from './views/new-home.component';
import { NewComponent } from './views/new.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule} from '../core/module';
import { SharedModule } from '../shared/module';

@NgModule({
  imports: [ RouterModule, CommonModule, SharedModule ],
  declarations: [ NewHomeComponent, NewComponent ],
  exports: [ NewHomeComponent ],
  entryComponents: [ NewHomeComponent, NewComponent ]
})
export class AdaptRoutesModule {}
