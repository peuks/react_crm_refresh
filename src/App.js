import React from "react";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import ROUTES, { RenderRoutes } from "routes";

const App = () => {
  return (
    <>
      <NavBar />
      <RenderRoutes routes={ROUTES} />;
    </>
  );
};

export default App;
