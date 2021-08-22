import { REMOVE_ERROR } from '../actionTypes';

export const removeError = (dispatch) => {
  dispatch({
    type: REMOVE_ERROR,
  });
};
