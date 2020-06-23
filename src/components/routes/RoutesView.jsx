import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Signup } from "../containers";
import { UserProfileContainer, TrendingPageContainer } from "../containers";

const RoutesView = (props) => {
  //const { isLoggedIn } = props;

  return (
    <Switch>
      <Route exact path="/users/:id" component={UserProfileContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <Route exact path="/" component={TrendingPageContainer} />
    </Switch>
  );
};

export default RoutesView;
