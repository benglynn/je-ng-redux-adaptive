import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Registry } from '../store/registry';
import { reducers } from './reducers';
import { effects } from './effects';
import { RestaurantsService } from '.';
import { ResultComponent } from './views/result.component';
import { ResultSeamDirective } from './views/result-seam.directive';
import { ResultSeamComponent } from './views/result-seam.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  providers: [ RestaurantsService ],
  declarations: [ ResultComponent, ResultSeamDirective, ResultSeamComponent ],
  exports: [ ResultComponent, ResultSeamDirective, ResultSeamComponent ],
  entryComponents: [ ResultComponent ]
})
export class RestaurantsModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
    registry.registerEffects(effects);
    registry.registerViews({
      'resultView': ResultComponent
    });
  }
}
