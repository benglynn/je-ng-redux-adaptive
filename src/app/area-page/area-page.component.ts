import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

class Restaurant {
  constructor(public title: string, public name: string) {};
}
const mockRestaurants = [[
  new Restaurant('Test restaurant', 'test-restaurant'),
  new Restaurant('Another restaurant', 'another-restaurant')
]];

@Component({
  selector: 'app-area-page',
  templateUrl: './area-page.component.html',
  styleUrls: ['./area-page.component.css']
})
export class AreaPageComponent implements OnInit {

  public restaurants$: Observable<Restaurant[]>;
  public id$: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.id$ = route.params.map(p => String(p.id).toUpperCase());
    this.restaurants$ = Observable.from(mockRestaurants);
  }

  ngOnInit() {
  }

}
