import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { ConsoleComponent } from './views/console.component';
import { Error404Component } from './views/error404.component';
import { LoggerService } from './logger.service';
import { SharedModule } from '../shared/module';

@NgModule({
  imports: [ RouterModule, CommonModule, SharedModule ],
  declarations: [
    HomeComponent,
    Error404Component,
    ConsoleComponent
  ],
  providers: [ LoggerService ],
  exports: [ ConsoleComponent ],
  entryComponents: [ Error404Component, HomeComponent ],
})
export class CoreModule {}
