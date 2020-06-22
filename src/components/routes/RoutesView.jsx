import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  UserProfileContainer,
  TrendingPageContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route
        exact
        path="/users/:id"
        component={UserProfileContainer}
      />

      <Route exact path="/" component={TrendingPageContainer} />
    </Switch>
  );
};

export default RoutesView;
