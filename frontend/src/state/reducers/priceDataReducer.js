import { GET_PRICE_DATA, DELETE_PRICE_DATA, FAILURE } from '../actionTypes';

const initialState = {
  priceData: null,
  error: null,
  disable: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICE_DATA:
      return {
        ...state,
        priceData: action.payload.data,
        disable: action.payload.endOfLength,
        user: action.payload.user,
      };
    case DELETE_PRICE_DATA:
      return {
        ...state,
        priceData: state.priceData.filter((item) => item.id !== action.payload),
      };
    case FAILURE:
      return {
        ...state,
        priceData: null,
        error: action.payload,
        disable: false,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
