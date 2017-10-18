import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../reducers';
import * as fromPostcode from '../../reducers/postcode';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withlatestfrom';

class Restaurant {
  constructor(public title: string, public name: string) {}
}
const mockRestaurants = [[
  new Restaurant('Test restaurant', 'test-restaurant'),
  new Restaurant('Another restaurant', 'another-restaurant')
]];

@Component({
  selector: 'app-area-container',
  templateUrl: './area-container.component.html',
  styleUrls: ['./area-container.component.css']
})
export class AreaContainerComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;
  postcode$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromReducers.State>
  ) {
    this.postcode$ = store.select('postcode');
    this.restaurants$ = Observable.from(mockRestaurants);

    route.params.map(p => String(p.postcode)).withLatestFrom(
      this.store.select('postcode'),
      (paramPostcode, statePostcode) => {
        if (statePostcode === null || statePostcode !== paramPostcode) {
          store.dispatch(new fromPostcode.Update(paramPostcode));
        }
      }
    ).subscribe();
  }

  ngOnInit() {
  }

}
