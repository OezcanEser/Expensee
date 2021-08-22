import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './reducers/userReducer';

const userDataFromStorage = sessionStorage.getItem('user')
  ? JSON.parse(sessionStorage.getItem('user'))
  : null;

const initialState = {
  userReducer: {
    user: userDataFromStorage,
  },
};
const middleware = [thunk];

const reducer = combineReducers({
  userReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
