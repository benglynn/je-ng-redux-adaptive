import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Store } from './store';
import { UpdateIsAdaptedAction } from '../core/actions/update-is-adapted-action';
import { Action } from '../store/action';
import { Actionable } from '../store/actionable';


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
      .mergeMap(serviceAction => serviceAction)
      .filter(serviceAction => serviceAction.active)
      .map(serviceAction => <Actionable>{ actionType: Action[serviceAction.type] })
      .filter(action => action.actionType !== undefined)
      .do(action => this.store.dispatch(action))
      .subscribe(() => {}, () => {}, () => {
        this.store.dispatch(new UpdateIsAdaptedAction(true));
      });
  }
}
