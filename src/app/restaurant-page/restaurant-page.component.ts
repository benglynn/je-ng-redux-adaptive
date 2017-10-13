import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  public id: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.id = route.url
      .map(segments => segments[0].path.replace(/restaurant-/, ''));
  }

  ngOnInit() {
  }

}
