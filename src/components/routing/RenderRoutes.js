import { Switch } from "react-router";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
const RenderRoutes = ({ routes, location }) => {
  return (
    <Switch location={location} key={location.pathname}>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <RouteWithSubRoutes component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

export default RenderRoutes;
