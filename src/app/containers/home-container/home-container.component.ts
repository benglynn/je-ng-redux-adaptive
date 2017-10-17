import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromReducers from '../../reducers';
import * as fromPostcode from '../../reducers/postcode';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/withlatestfrom';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  readonly postcodePattern =
    /^\s*([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})\s*$/i;

  inputKeyUp$: Subject<Event>;
  buttonClick$: Subject<Event>;
  input$: Observable<string>;
  isValidPostcode$: Observable<boolean>;
  postcode$: Observable<fromPostcode.State>;

  constructor(
    private router: Router,
    private store: Store<fromReducers.State>
  ) {
    this.inputKeyUp$ = new Subject<Event>();
    this.buttonClick$ = new Subject<Event>();
    this.postcode$ = store.select('postcode');

    this.input$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value);

    this.isValidPostcode$ = this.input$
      .map(value => value.match(this.postcodePattern) !== null)
      .startWith(false);

    this.inputKeyUp$
      .filter((e => (e as KeyboardEvent).keyCode === 13))
      .merge(this.buttonClick$)
      .withLatestFrom(this.input$, (event, str) => {
        return str.match(this.postcodePattern);
      })
      .subscribe(match => {
        if (match !== null) {
          const title = (`${match[1]} ${match[2]}`).toUpperCase();
          const name = (`${match[1]}${match[2]}`).toLowerCase();
          this.store.dispatch(new fromPostcode.Update({name: name, title: title}));
          this.router.navigateByUrl(`/${name}`);
        }
      });
  }

  ngOnInit() {
  }

}
