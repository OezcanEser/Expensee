import { CREATE_USER_DATA, FAILURE, REMOVE_ERROR } from '../actionTypes';

const initialState = {
  data: null,
  open: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_DATA:
      return {
        ...state,
        open: true,
        data: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        data: null,
        error: null,
        open: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
