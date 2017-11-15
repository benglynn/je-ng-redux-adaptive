import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoggerService {

  private subject = new Subject<string>();

  subscribe(...args) {
    return this.subject.subscribe.apply(this.subject, args);
  }

  log(msg: string) {
    this.subject.next(msg);
  }

}
