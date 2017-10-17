import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html',
  styleUrls: ['./restaurant-container.component.css']
})
export class RestaurantContainerComponent implements OnInit {

  public postcode: Observable<string>;
  public name: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.postcode = route.params.map(p => String(p.postcode));
    this.name = route.params.map(p => String(p.restaurant));
  }

  ngOnInit() {
  }

}
