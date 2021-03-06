import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { UpdateAreaAction } from '../../area/actions/update-area-action';
import { postcodePattern } from '../../area/postcode-pattern';
import { VisitAreaAction } from '../../area/actions/visit-area-action';

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
      .map(value => value.match(postcodePattern) !== null);

      this.inputKeyUp$
        .filter((e => (e as KeyboardEvent).keyCode === this.returnKeyCode))
        .merge(this.buttonClick$)
        .withLatestFrom(this.input$, (event, str) => {
          return str.match(postcodePattern);
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


