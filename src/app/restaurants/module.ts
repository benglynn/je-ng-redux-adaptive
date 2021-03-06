import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantsService } from './restaurants.service';
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
export class RestaurantsModule {}
