import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { ResultComponent } from '../../restaurants/views/result.component';
import { Restaurant } from '../../restaurants/restaurant';

export interface IResultView {
  restaurant: Restaurant;
}

@Component({
  selector: 'app-new-result',
  templateUrl: '../../restaurants/views/result.component.html',
  styleUrls: [
    '../../restaurants/views/result.component.less',
    './new-result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewResultComponent extends ResultComponent {}
