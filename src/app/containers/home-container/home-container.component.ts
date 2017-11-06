import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/take';
import { Store } from '../../store/store';
import {
  State as PostcodeXState,
  pattern as postcodePattern,
  UpdatePostcode
} from '../../postcode';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html'
})
export class HomeContainerComponent implements OnInit, OnDestroy {

  inputKeyUp$: Subject<Event>;
  buttonClick$: Subject<Event>;
  input$: Observable<string>;
  isValidPostcode$: Observable<boolean>;
  postcodeX$: Observable<PostcodeXState>;


  subscriptionx: Subscription;
  subscriptionsx: Subscription[] = [];

  constructor(
    private router: Router,
    private storex: Store
  ) {
    this.inputKeyUp$ = new Subject<Event>();
    this.buttonClick$ = new Subject<Event>();
    this.postcodeX$ = storex.select('postcode');
  }

  ngOnInit() {

    const postcodeSub = this.postcodeX$.subscribe(initialPostcode => {
      this.input$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value)
        .startWith(initialPostcode === null ? '' : initialPostcode);
        this.isValidPostcode$ = this.input$
        .map(value => value.match(postcodePattern) !== null);
    });
    this.subscriptionsx.push(postcodeSub);

    const returnKeyCode = 13;
    this.inputKeyUp$
      .filter((e => (e as KeyboardEvent).keyCode === returnKeyCode))
      .merge(this.buttonClick$)
      .withLatestFrom(this.input$, (event, str) => {
        return str.match(postcodePattern);
      })
      .subscribe(match => {
        if (match !== null) {
          const name = (`${match[1]}${match[2]}`).toLowerCase();
          this.storex.dispatch(new UpdatePostcode(name));
          this.router.navigateByUrl(`/${name}`); // TODO: ACTION!!!!
        }
      });
  }

  ngOnDestroy() {
    this.subscriptionsx.forEach(subscription => subscription.unsubscribe());
  }
}
