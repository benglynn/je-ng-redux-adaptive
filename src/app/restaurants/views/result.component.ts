import { OnInit, Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { Restaurant } from '../../restaurant';

export interface IResultView {
  restaurant: Restaurant;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements IResultView, OnInit {
  @Input() restaurant: Restaurant;
  public  ratingClass: string;

  ngOnInit() {
    this.ratingClass = 'rating-' + this.restaurant.rating
      .toString(10).replace(/\./, '-');
  }
}
