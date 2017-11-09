import { Component } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  area$: Observable<string>;

  constructor( private store: Store) {
    this.area$ = store.select('area');
  }

}


