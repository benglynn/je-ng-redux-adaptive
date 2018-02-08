import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { IAction } from '../app.reducers';
import { Store } from './store';
import { UpdateIsAdaptedAction } from '../core/actions';
import { Action } from '../store';


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
      .map(action => {
        // Temporarily map from old to new action types
        const actionType: Action|null =
          action.type === 'INIT_ADAPT_ROUTES' ? Action.initAdaptRoutesAction :
          action.type === 'INIT_ADAPT_SERVICE' ? Action.initAdaptServiceAction :
          action.type === 'INIT_ADAPT_RESULT_VIEW' ? Action.initAdaptResultsView :
          null;
        return <IAction>{ type: action.type, actionType: actionType };
      })
      .do(action => this.store.dispatch(action))
      .subscribe(() => {}, () => {}, () => {
        this.store.dispatch(new UpdateIsAdaptedAction(true));
      });
  }
}
