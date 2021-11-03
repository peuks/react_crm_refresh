import React, { useState } from "react";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import ROUTES, { RenderRoutes } from "routes";
import useLogin from "hooks/useLogin";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Initialize the app by loading token from localstorage if exist
   */
  const { appInit } = useLogin();
  const location = useLocation();
  appInit();

  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar logged={isAuthenticated} />
      <RenderRoutes
        location={location}
        routes={ROUTES}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </AnimatePresence>
  );
};

export default App;
