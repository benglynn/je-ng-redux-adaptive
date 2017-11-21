import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startwith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/withlatestfrom';
import 'rxjs/add/operator/map';
import { areaPattern, UpdateAreaAction, VisitAreaAction } from '../../area';

@Component({
  selector: 'app-postcode-search',
  templateUrl: './postcode-search.component.html',
  styleUrls: ['./postcode-search.component.less']
})
export class PostcodeSearchComponent implements OnInit, OnDestroy {

  @Input() postcode$: Observable<string>;
  inputKeyUp$ = new Subject<Event>();
  buttonClick$ = new Subject<Event>();
  input$: Observable<string>;
  isValidPostcode$: Observable<boolean>;
  subscription: Subscription;
  readonly returnKeyCode = 13;

  constructor( private router: Router ) {}

  ngOnInit() {

    this.subscription = this.postcode$.subscribe(postcode => {

      this.input$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value)
        .startWith(postcode === null ? '' : postcode);

      this.isValidPostcode$ = this.input$
      .map(value => value.match(areaPattern) !== null);

      this.inputKeyUp$
        .filter((e => (e as KeyboardEvent).keyCode === this.returnKeyCode))
        .merge(this.buttonClick$)
        .withLatestFrom(this.input$, (event, str) => {
          return str.match(areaPattern);
        })
        .subscribe(match => {
          if (match !== null) {
            const name = (`${match[1]}${match[2]}`).toLowerCase();
            this.router.navigateByUrl(`/${name}`);
          }
        });

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


