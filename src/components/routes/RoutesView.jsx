import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Signup } from '../containers';

const RoutesView = (props) => {
  //const { isLoggedIn } = props;

  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
  
      {/* Displays our Login component as a fallback */}
      {/* <Route component={Signup} /> */}
      <Route component={Login} />
    </Switch>
  );
}

export default RoutesView;