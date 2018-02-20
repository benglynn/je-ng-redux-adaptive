import { Actionable } from './actionable';

export type ReduceStateSlice<StateSlice> = (
  currentState: StateSlice, action: Actionable
) => StateSlice|null;
