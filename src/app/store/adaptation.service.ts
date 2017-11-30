import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { IAction } from '../app.reducers';
import { Store } from './store';
import { UpdateIsAdaptedAction } from '../core/actions';


interface IServiceAction {
  id: number;
  type: string;
  active: boolean;
}

interface IServiceResponse {
  actions: IServiceAction[];
}

@Injectable()
export class AdaptationService {

  readonly stateServiceUri = 'https://us-central1-state-service.cloudfunctions.net/actions';
  constructor ( private http: HttpClient, private store: Store ) {}

  fetchActions () {
    this.http.get<IServiceResponse>(this.stateServiceUri)
      .map(response => response.actions)
      .mergeMap(action => action)
      .filter(action => action.active)
      .map(action => <IAction>{ type: action.type })
      // .delay(100000)
      .do(action => this.store.dispatch(action))
      .subscribe(() => {}, () => {}, () => {
        this.store.dispatch(new UpdateIsAdaptedAction(true));
      });
  }
}
