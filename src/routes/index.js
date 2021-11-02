import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Customers, Invoices, Login, Register } from "@pages";
import { useSelector } from "react-redux";
import { CustomerAdd } from "pages";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: RenderRoutes, // here's the update
    routes: [
      {
        path: "/customers",
        key: "APP_CUSTOMERS",
        exact: true,
        protected: true,
        component: () => <Customers />,
      },
      {
        path: "/customers/:id",
        key: "APP_CUSTOMERS_ADD",
        exact: true,
        protected: true,
        component: () => <CustomerAdd />,
      },
      {
        path: "/invoices",
        key: "APP_INVOICES",
        exact: true,
        protected: true,
        component: () => <Invoices />,
      },
      {
        path: "/login",
        key: "APP_LOGIN",
        exact: true,
        protected: false,
        component: () => <Login />,
      },
      {
        path: "/register",
        key: "APP_REGISTER",
        exact: true,
        protected: false,
        component: () => <Register />,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        protected: true,
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
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        (route.protected && isAuthenticated) || !route.protected ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to="/" />
        )
      }
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
