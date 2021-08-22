import { REGISTER, LOGIN, LOGOUT, FAILURE, REMOVE_ERROR } from '../actionTypes';

const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };

    case FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        user: null,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
