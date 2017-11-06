interface StringHash {
  [name: string]: string;
}

interface StringHashes {
  [name: string]: StringHash;
}

export interface State {
  reducers: StringHashes;
  effects: StringHashes;
}

export const initialState: State = {
  reducers: {
    area: {
      'UPDATE_AREA': 'updateArea'
    },
    restaurants: {
      'UPDATE_RESTAURANTS': 'updateRestaurants',
      'REMOVE_RESTAURANTS': 'removeRestaurants',
      'UPDATE_RESTAURANTS_STATUS': 'UpdateRestaurantsStatus'
    }
  },
  effects: {
    'restaurants': {
      'LOAD_RESTAURANTS': 'loadRestaurants'
    }
  }
};
