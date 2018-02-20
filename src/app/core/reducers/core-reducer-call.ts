import { CoreReducer } from './core-reducer';
import { CoreReducerFunc } from './core-reducer-func';
import { navigationEndReducer } from './navigation-end-reducer';
import { updateIsAdapatedReducer } from './update-is-adapated-reducer';
import { updateIsUrlResolvedReducer } from './update-is-url-resolved-reducer';
import { initAdaptServiceReducer } from '../../adaptations/adapt-service/reducers/init-adapt-service-reducer';
import { initAdaptRoutesReducer } from '../../adaptations/adapt-routes/reducers/init-adapt-routes-reducer';
import { initAdaptResultViewReducer } from '../../adaptations/adapt-result-view/reducers/init-adapt-result-view-reducer';


export const coreReducerCall = (coreReducer: CoreReducer): CoreReducerFunc => {
  switch (coreReducer) {
    case CoreReducer.navigationEndReducer:
    return navigationEndReducer;
    case CoreReducer.updateIsAdaptedReducer:
    return updateIsAdapatedReducer;
    case CoreReducer.updateIsUrlResolvedReducer:
    return updateIsUrlResolvedReducer;
    case CoreReducer.initAdaptServiceReducer:
    return initAdaptServiceReducer;
    case CoreReducer.initAdaptRoutesReducer:
    return initAdaptRoutesReducer;
    case CoreReducer.initAdaptResultViewReducer:
    return initAdaptResultViewReducer;
  }
  return noCaseFor(coreReducer);
};

function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }
