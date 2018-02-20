import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../../store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent {}


