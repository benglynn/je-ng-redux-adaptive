import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Registry } from '../store/registry';
import { reducers } from './reducers';
import { effects } from './effects';
import { AreaContainerComponent
} from './area-container/area-container.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    AreaContainerComponent
  ]
})
export class AreaModule {
  constructor(private registry: Registry) {
    registry.registerReducers(reducers);
    registry.registerEffects(effects);
  }
}
