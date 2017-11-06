type StringHash = {[name: string]: string}
type StringHashes = {[name: string]: StringHash};

export interface State {
  reducers: StringHashes,
  effects: StringHash,
}

export const initialState: State = {
  reducers: {
    postcode: {
      'UPDATE_POSTCODE': 'updatePostcode'
    },
    restaurants: {
      'UPDATE_RESTAURANTS': 'updateRestaurants',
      'REMOVE_RESTAURANTS': 'removeRestaurants',
      'UPDATE_RESTAURANT_STATUS': 'updateRestaurantStatus'
    }
  },
  effects: {
    'LOAD_RESTAURANTS': 'loadRestaurants'
  }
}
