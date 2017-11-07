import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html'
})
export class RestaurantContainerComponent implements OnInit {

  public area$: Observable<string>;
  public name$: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.area$ = route.params.map(p => String(p.area));
    this.name$ = route.params.map(p => String(p.restaurant));
  }

  ngOnInit() {
  }

}
