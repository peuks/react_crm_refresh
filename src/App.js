import React from "react";
import ROUTES, { RenderRoutes } from "./routes";

const App = () => {
  return <RenderRoutes routes={ROUTES} />;
};

export default App;
