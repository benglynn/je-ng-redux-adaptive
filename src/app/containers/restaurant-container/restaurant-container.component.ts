import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html',
  styleUrls: ['./restaurant-container.component.css']
})
export class RestaurantContainerComponent implements OnInit {

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
