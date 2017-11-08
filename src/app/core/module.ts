import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { LoadedComponentDirective } from './loading-container/loaded-component.directive';
import { HomeContainerComponent } from './home-container/home-container.component';
import { RouteResolver } from './route-resolver.service';
import { HomeComponent } from './views/home.component';
import { Error404Component } from './views/error404.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    LoadingContainerComponent,
    LoadedComponentDirective,
    HomeComponent,
    Error404Component,
    HomeContainerComponent
  ],
  entryComponents: [ Error404Component, HomeComponent ],
  providers: [ RouteResolver ]
})
export class CoreModule {}
