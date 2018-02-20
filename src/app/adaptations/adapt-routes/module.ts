import { NgModule } from '@angular/core';
import { NewComponent } from './views/new.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule} from '../../core/module';
import { SharedModule } from '../../shared/module';

@NgModule({
  imports: [ RouterModule, CommonModule, SharedModule ],
  declarations: [ NewComponent ],
  entryComponents: [ NewComponent ]
})
export class AdaptRoutesModule {}
