import { IReducer } from '.';

export interface IReducers {
  [name: string]: IReducer<any>;
}
