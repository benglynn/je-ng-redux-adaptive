import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ErrorContainerComponent } from './error-container/error-container.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    LoadingContainerComponent,
    HomeContainerComponent,
    ErrorContainerComponent
  ]
})
export class CoreModule {}
