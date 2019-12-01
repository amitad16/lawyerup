import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// Components
import Error404 from "containers/Error404";
import HomePage from "containers/HomePage";

const Routing = () => {
  const routes = [
    {
      isPrivate: false,
      path: "/",
      exact: true,
      component: withRouter(HomePage)
    },
    {
      isPrivate: false,
      path: "*",
      component: withRouter(Error404)
    }
  ];

  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </React.Fragment>
  );
};

export default Routing;
