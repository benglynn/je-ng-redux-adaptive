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
import {IAreaState, areaPattern, UpdateAreaAction} from '../../area';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html'
})
export class HomeContainerComponent implements OnInit, OnDestroy {

  inputKeyUp$: Subject<Event>;
  buttonClick$: Subject<Event>;
  input$: Observable<string>;
  isValidPostcode$: Observable<boolean>;
  area$: Observable<IAreaState>;


  subscription: Subscription;
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.inputKeyUp$ = new Subject<Event>();
    this.buttonClick$ = new Subject<Event>();
    this.area$ = store.select('area');
  }

  ngOnInit() {

    const areaSub = this.area$.subscribe(initialPostcode => {
      this.input$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value)
        .startWith(initialPostcode === null ? '' : initialPostcode);
        this.isValidPostcode$ = this.input$
        .map(value => value.match(areaPattern) !== null);
    });
    this.subscriptions.push(areaSub);

    const returnKeyCode = 13;
    this.inputKeyUp$
      .filter((e => (e as KeyboardEvent).keyCode === returnKeyCode))
      .merge(this.buttonClick$)
      .withLatestFrom(this.input$, (event, str) => {
        return str.match(areaPattern);
      })
      .subscribe(match => {
        if (match !== null) {
          const name = (`${match[1]}${match[2]}`).toLowerCase();
          this.store.dispatch(new UpdateAreaAction(name));
          this.router.navigateByUrl(`/${name}`); // TODO: ACTION!!!!
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
