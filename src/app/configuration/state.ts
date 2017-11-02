export interface State {
  reducers: {
    postcode: {
      UPDATE_POSTCODE: string;
    },
    restaurants: {},
    configuration: {};
  }
}

export const initialState: State = {
  reducers: {
    postcode: {
      UPDATE_POSTCODE: 'updatePostcode'
    },
    restaurants: {},
    configuration: {}
  }
}
