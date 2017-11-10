import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test',
  template: `<h1>I'm a test</h1><a [routerLink]="['/']">home</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {}


