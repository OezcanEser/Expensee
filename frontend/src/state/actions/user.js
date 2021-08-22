import axios from 'axios';
import { REGISTER, LOGIN, LOGOUT, FAILURE } from '../actionTypes';
import { errorResponseMessage } from '../../utils/errorResponseMessage';

export const registerUser =
  (username, email, password, password2, history) => async (dispatch) => {
    try {
      if (password !== password2) {
        throw new Error('Password does not match!');
      }

      let { data } = await axios.post('/user/register', {
        username,
        email,
        password,
      });

      if (data.user) {
        window.sessionStorage.clear();

        window.sessionStorage.setItem('user', JSON.stringify(data.user));
        history.push('/home');
      }

      dispatch({
        type: REGISTER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: errorResponseMessage(error),
      });
    }
  };

export const loginUser = (email, password, history) => async (dispatch) => {
  try {
    let { data } = await axios.post('/user/login', { email, password });

    if (data.user) {
      window.sessionStorage.clear();

      window.sessionStorage.setItem('user', JSON.stringify(data.user));
      history.push('/home');
    }

    dispatch({
      type: LOGIN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: errorResponseMessage(error),
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    sessionStorage.clear();

    let { data } = await axios.get('/user/logout');

    dispatch({ type: LOGOUT, payload: data });
  } catch (error) {}
};
