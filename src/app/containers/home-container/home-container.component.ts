import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public inputKeyUp$: Subject<Event>;
  public buttonClick$: Subject<Event>;
  public postcode$: Observable<string>;
  public isValidPostcode$: Observable<boolean>;

  constructor(
    private router: Router
  ) {
    this.inputKeyUp$ = new Subject<Event>();
    this.buttonClick$ = new Subject<Event>();

    this.postcode$ = this.inputKeyUp$.map(event =>
        (event.target as HTMLInputElement).value);

    this.isValidPostcode$ = this.postcode$
      .map(value => value.match(this.postcodePattern) !== null)
      .startWith(false);

    this.inputKeyUp$
      .filter((e => (e as KeyboardEvent).keyCode === 13))
      .merge(this.buttonClick$)
      .withLatestFrom(this.postcode$, (event, postcode) => {
        const match = postcode.match(this.postcodePattern);
        return match ? `/${(match[1] + match[2]).toLocaleLowerCase()}` : null;
      })
      .filter(pathPart => pathPart !== null)
      .subscribe(pathPart => this.router.navigateByUrl((pathPart as string)));
  }

  ngOnInit() {
  }

}
