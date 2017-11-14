import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IRestaurant } from '../../restaurant';

export interface IResultView {
  restaurant: IRestaurant;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements IResultView {
  @Input() restaurant: IRestaurant;
}
