import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { LoadedComponentDirective } from './loading-container/loaded-component.directive';
import { RouteResolver } from './route-resolver.service';
import { CanActivateInitial } from './can-activate.service';
import { HomeComponent } from './views/home.component';
import { PostcodeSearchComponent } from './views/postcode-search.component';
import { Error404Component } from './views/error404.component';
import { TestComponent } from './views/test.component';
import { Registry } from '../store/registry';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    LoadingContainerComponent,
    LoadedComponentDirective,
    HomeComponent,
    Error404Component,
    PostcodeSearchComponent,
    TestComponent
  ],
  entryComponents: [ Error404Component, HomeComponent, TestComponent ],
  providers: [ RouteResolver, CanActivateInitial ]
})
export class CoreModule {
  constructor( private registry: Registry ) {
    this.registry.registerViews({
      homeView: HomeComponent,
      error404View: Error404Component
    });
  }
}
