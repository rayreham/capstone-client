import React from "react";
import { Switch, Route } from "react-router-dom";
import {

  
  UserProfileContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Container} />
      <Route exact path="/" component={Container} />
      <Route exact path="/" component={Container} />
      <Route exact path="/" component={Container} />

      <Route
        exact
        path="/users/:id"
        component={UserProfileContainer}
      />
    </Switch>
  );
};

export default RoutesView;
