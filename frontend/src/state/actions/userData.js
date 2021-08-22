import axios from 'axios';

import { CREATE_USER_DATA, FAILURE } from '../actionTypes';
import { errorResponseMessage } from '../../utils/errorResponseMessage';

export const createUserData =
  (category, description, price, created_at) => async (dispatch) => {
    try {
      let { data } = await axios.post('/input', {
        category,
        description,
        price,
        created_at,
      });

      dispatch({ type: CREATE_USER_DATA, payload: data.data });
    } catch (error) {
      dispatch({
        type: FAILURE,
        error: errorResponseMessage(error),
      });
    }
  };
