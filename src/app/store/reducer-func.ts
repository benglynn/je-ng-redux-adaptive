import { Actionable } from './actionable';

export type ReducerFunc<StateSlice> =
(action: Actionable, stateSlice: StateSlice) => StateSlice;
