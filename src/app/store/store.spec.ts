import { nextSlices } from './utils';
import { IAppStateX, IActionX, IReducersX } from './types';

describe('next slices', () => {

  const state: IAppStateX = {
    configuration: {reducers: {}, effects: {}},
    postcode: null,
    restaurants: {status: null, data: null}
  };
  const dummyAction: IActionX = {type: 'DUMMY_ACTION'};
  const emptyReducers: IReducersX = {};

  it('returns undefined for each slice', () => {
    expect(nextSlices(state, dummyAction, emptyReducers))
    .toEqual([undefined, undefined, undefined]);
  });
});
