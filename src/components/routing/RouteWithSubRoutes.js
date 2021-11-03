import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
const RouteWithSubRoutes = (route) => {
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
};

export default RouteWithSubRoutes;
