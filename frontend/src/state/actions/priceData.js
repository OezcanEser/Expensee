import axios from 'axios';
import { errorResponseMessage } from '../../utils/errorResponseMessage';
import { GET_PRICE_DATA, DELETE_PRICE_DATA, FAILURE } from '../actionTypes';

export const getPriceData = (term, showMore) => async (dispatch) => {
  try {
    let { data } = await axios.get(`${term}?offset=${showMore}`);
    dispatch({
      type: GET_PRICE_DATA,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: errorResponseMessage(error),
    });
  }
};

export const deletePriceData = (idToDelete) => async (dispatch) => {
  try {
    await axios.delete(`/input/${idToDelete}`);
    dispatch({
      type: DELETE_PRICE_DATA,
      payload: idToDelete,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: errorResponseMessage(error),
    });
  }
};
