import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { ConsoleComponent } from './views/console.component';
import { PostcodeSearchComponent } from './views/postcode-search.component';
import { Error404Component } from './views/error404.component';
import { Registry } from '../store/registry';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    HomeComponent,
    Error404Component,
    PostcodeSearchComponent,
    ConsoleComponent
  ],
  providers: [ LoggerService ],
  exports: [ ConsoleComponent ],
  entryComponents: [ Error404Component, HomeComponent ],
})
export class CoreModule {
  constructor( private registry: Registry ) {
    this.registry.registerViews({
      homeView: HomeComponent,
      error404View: Error404Component
    });
  }
}
