import { IAction } from '.';

export type IReducer<T> = (action: IAction, state: T) => T;
