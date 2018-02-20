import { AreaReducer } from './area-reducer';
import { AreaReducerFunc } from './area-reducer-func';
import { updateAreaReducer } from './update-area-reducer';

export const areaReducerCall = (areaReducer: AreaReducer): AreaReducerFunc => {
  switch (areaReducer) {
    case AreaReducer.updateAreaReducer:
    return updateAreaReducer;
  }
  return noCaseFor(areaReducer);
};

function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }
