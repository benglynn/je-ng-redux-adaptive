import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, Inject, NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

export type InitialStateX = {[name: string]: any};
export type ActionX = { type: string; payload?: any };
export type ReducerX<T> = (action: ActionX, state: T) => T

export const INITIAL_STATE_X = new InjectionToken<InitialStateX>('Initial state X');

@Injectable()
export class StoreX<T> {

  state$: BehaviorSubject<T>;
  action$: BehaviorSubject<ActionX>;
  private actionSubscription: Subscription;
  private reducerRegistry: any[];

  constructor( @Inject(INITIAL_STATE_X) private initialState: InitialStateX) {
    this.state$ = new BehaviorSubject(this.initialState as T);
    this.action$ = new BehaviorSubject({ type: 'INITIAL_ACTION'});

    this.actionSubscription = this.action$.subscribe(
      action => console.log('new action:', action)
    );
  }
}

@NgModule({})
export class StoreModule {
  static forRoot(initialState: InitialStateX): ModuleWithProviders{
    return {
      ngModule: StoreModule,
      providers: [
        StoreX,
        { provide: INITIAL_STATE_X, useValue: initialState }
      ]
    }
  }
}
