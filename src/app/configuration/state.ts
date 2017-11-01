export interface State {
  reducers: {
    postcode: {
      UPDATE_POSTCODE: string;
      REMOVE_POSTCODE: string;
    },
    dummy: {};
  }
}

export const initialState: State = {
  reducers: {
    postcode: {
      UPDATE_POSTCODE: 'updatePostcode',
      REMOVE_POSTCODE: 'removePostcode'
    },
    dummy: {}
  }
}
