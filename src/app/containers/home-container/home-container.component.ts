import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  readonly postcodePattern = /([A-Z]{1,2}[0-9][0-9A-Z]?)\s?([0-9][A-Z]{2})/i;

  public postcode$: Subject<string>;
  public buttonClick$: Subject<Event>;
  public isValidPostcode$: Observable<boolean>;
  public validPostcode$: Observable<string>;

  constructor(
    private router: Router
  ) {
    this.postcode$ = new Subject<string>();
    this.buttonClick$ = new Subject<Event>();

    this.isValidPostcode$ = this.postcode$
      .map(value => value.match(this.postcodePattern) !== null)
      .startWith(false);

    this.validPostcode$ = this.postcode$
      .filter(value => value.match(this.postcodePattern) !== null);

    Observable.combineLatest(this.validPostcode$, this.buttonClick$)
      .subscribe((latest: [string, Event]) => {
        const postcode = latest[0];
        const match = postcode.match(this.postcodePattern);
        if (match !== null) {
          const incode = match[1].toLowerCase();
          this.router.navigateByUrl(`/area/${incode}`);
        }
      });
  }

  ngOnInit() {
  }

}
