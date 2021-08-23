import { GET_TOTAL_COSTS, FAILURE } from '../actionTypes';

const initialState = {
  totalCosts: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_COSTS:
      return {
        ...state,
        totalCosts: action.payload,
        error: null,
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        totalCosts: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
