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
      'REMOVE_RESTAURANTS': 'removeRestaurants'
    }
  },
  effects: {
    'LOAD_RESTAURANTS': 'loadRestaurants'
  }
}
