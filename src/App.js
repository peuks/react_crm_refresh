import React from "react";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import ROUTES, { RenderRoutes } from "routes";
import { setup } from "services/authApi";

const App = () => {
  /**
   * Initialize the app by loading token from localstorage if exist
   */
  setup();
  return (
    <>
      <NavBar />
      <RenderRoutes routes={ROUTES} />
    </>
  );
};

export default App;
