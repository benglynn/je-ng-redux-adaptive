import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostcodeSearchComponent } from './views/postcode-search.component';
import { HeaderComponent } from './views/header.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ PostcodeSearchComponent, HeaderComponent ],
  exports: [ PostcodeSearchComponent, HeaderComponent ],
})
export class SharedModule {}
