import React from "react";
import { Route, Switch } from "react-router-dom";
import { Customers, Home2 } from "../pages";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: RenderRoutes, // here's the update
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: () => <Home2 />,
      },
      {
        path: "/customers",
        key: "APP_CUSTOMERS",
        exact: true,
        component: () => <Customers />,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
export default ROUTES;
