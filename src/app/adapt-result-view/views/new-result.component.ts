import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IRestaurant } from '../../restaurant';

export interface IResultView {
  restaurant: IRestaurant;
}

@Component({
  selector: 'app-new-result',
  templateUrl: '../../restaurants/views/result.component.html',
  styleUrls: ['./new-result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewResultComponent implements IResultView {
  @Input() restaurant: IRestaurant;
}
