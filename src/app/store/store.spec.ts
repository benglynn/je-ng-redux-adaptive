import { nextSlices } from './utils';
import { IAppState, IAction, IReducers } from './types';

describe('nextState', () => {

  const state: IAppState = {
    configuration: {reducers: {}, effects: {}},
    area: null,
    restaurants: {status: null, data: null}
  };
  const dummyAction: IAction = {type: 'DUMMY_ACTION'};
  const emptyReducers: IReducers = {};

  it('returns undefined for each slice', () => {
    expect(nextSlices(state, dummyAction, emptyReducers))
    .toEqual([undefined, undefined, undefined]);
  });
});
