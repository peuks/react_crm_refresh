import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";
import NavBar from "./components/layout/navigation/NavBar/NavBar";

// Redux setup
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

/**
 * Store takes a Reducer
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //Devtools
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
