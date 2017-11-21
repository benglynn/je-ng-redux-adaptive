import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostcodeSearchComponent } from './views/postcode-search.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ PostcodeSearchComponent ],
  exports: [ PostcodeSearchComponent ],
})
export class SharedModule {}
