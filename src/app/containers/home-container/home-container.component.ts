import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { StoreX } from '../../store/module';
import * as fromReducers from '../../reducers';
import * as fromPostcode from '../../reducers/postcode';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  inputKeyUp$: Subject<Event>;
  buttonClick$: Subject<Event>;
  input$: Observable<string>;
  isValidPostcode$: Observable<boolean>;
  postcode$: Observable<fromPostcode.State>;

  subscriptionx: Subscription;

  constructor(
    private router: Router,
    private store: Store<fromReducers.State>,
    private storex: StoreX
  ) {
    this.inputKeyUp$ = new Subject<Event>();
    this.buttonClick$ = new Subject<Event>();
    this.postcode$ = store.select('postcode');

    this.subscriptionx = this.storex.state$.subscribe();
  }

  ngOnInit() {

    this.postcode$.take(1).subscribe(initialPostcode => {

      this.input$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value)
        .startWith(initialPostcode === null ? '' : initialPostcode);

        this.isValidPostcode$ = this.input$
        .map(value => value.match(fromPostcode.postcodePattern) !== null);

        const returnKeyCode = 13;
        this.inputKeyUp$
          .filter((e => (e as KeyboardEvent).keyCode === returnKeyCode))
          .merge(this.buttonClick$)
          .withLatestFrom(this.input$, (event, str) => {
            return str.match(fromPostcode.postcodePattern);
          })
          .subscribe(match => {
            if (match !== null) {
              const name = (`${match[1]}${match[2]}`).toLowerCase();
              this.store.dispatch(new fromPostcode.Update(name));
              this.router.navigateByUrl(`/${name}`);
            }
          });
    });
  }

}
