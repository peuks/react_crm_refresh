import React, { useState } from "react";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import ROUTES, { RenderRoutes } from "routes";
import useLogin from "hooks/useLogin";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Initialize the app by loading token from localstorage if exist
   */
  const { appInit } = useLogin();
  appInit();
  return (
    <>
      <NavBar logged={isAuthenticated} />
      <RenderRoutes
        routes={ROUTES}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};

export default App;
