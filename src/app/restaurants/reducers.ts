import { ReducerFunc } from '../store';
import { IReducer } from '../app.reducers';
import { UpdateRestaurantsAction, RemoveRestaurantsAction } from './actions';
import { RestaurantsState } from './state';

export type RestaurantsReducerFunc = ReducerFunc<RestaurantsState>;

export enum RestaurantsReducer {
  updateRestaurantsReducer = 'updateRestaurantsReducer',
  removeRestaurantsReducer = 'removeRestaurantsReducer',
}

export const restaurantsReducerAsFunc = (
  restaurantsReducer: RestaurantsReducer): RestaurantsReducerFunc => {
    switch (restaurantsReducer) {
      case RestaurantsReducer.removeRestaurantsReducer:
        return removeRestaurantsReducer;
      case RestaurantsReducer.updateRestaurantsReducer:
       return updateRestaurantsReducer;
    }
  return noCaseFor(restaurantsReducer);
};
function noCaseFor(_: never): never { throw new Error('Switch not exhaustive'); }

// TODO: move the following to separate files

const updateRestaurantsReducer: RestaurantsReducerFunc = (
  action: UpdateRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: action.payload };
};

const removeRestaurantsReducer: RestaurantsReducerFunc = (
  action: RemoveRestaurantsAction, state: RestaurantsState
): RestaurantsState => {
  return { ...state, data: null };
};


/* Deprecated below *//////////////////////////////////////////////////////////

type IRestaurantsReducer = IReducer<RestaurantsState>;

export const updateRestaurantsOld: IRestaurantsReducer = (
  action: UpdateRestaurantsAction, state: RestaurantsState
) => {
  return { ...state, data: action.payload};
};

export const removeRestaurantsOld: IRestaurantsReducer = (
  action: RemoveRestaurantsAction, state: RestaurantsState
) => {
  return { ...state, status: null, data: null };
};

export interface IRestaurantsReducers  {
  updateRestaurants: IRestaurantsReducer;
  removeRestaurants: IRestaurantsReducer;
}

export type IRestaurantsReducerName = keyof IRestaurantsReducers;

export const restaurantsReducers: IRestaurantsReducers = {
  updateRestaurants: updateRestaurantsOld,
  removeRestaurants: removeRestaurantsOld,
};

