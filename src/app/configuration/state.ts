interface StringHash {
  [name: string]: string;
}

interface StringHashes {
  [name: string]: StringHash;
}

export interface SliceConfiguration {
  reducers?: StringHash;
  effects?: StringHash;
  containerViews?: StringHash;
  views?: StringHash;
}

export interface State {
  area: SliceConfiguration;
  restaurants: SliceConfiguration;
}

export const initialState: State = {
  area: {
    reducers: {
      'UPDATE_AREA': 'updateArea'
    }
  },
  restaurants: {
    reducers: {
      'UPDATE_RESTAURANTS': 'updateRestaurants',
      'REMOVE_RESTAURANTS': 'removeRestaurants',
      'UPDATE_RESTAURANTS_STATUS': 'UpdateRestaurantsStatus'
    },
    effects: {
      'LOAD_RESTAURANTS': 'loadRestaurants'
    }
  }
};
