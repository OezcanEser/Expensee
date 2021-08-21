import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = window.sessionStorage.getItem('user')
    ? window.sessionStorage.getItem('user')
    : null;
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
