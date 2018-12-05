import React, {Component} from 'react';

import { Route, Redirect } from 'react-router-dom';


function VerifyLoggedInContainer ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/Login', state: {from: props.location}}} />}
      />
    )
  }
  export default VerifyLoggedInContainer;