import { loginURL } from "api/url";
import axios from "axios";

const authenticate = (credentials) => {
  return axios.post(loginURL(), credentials).then((token) => {
    axios.defaults.headers["Authorization"] = "Bearer " + token.data.token;
    window.localStorage.setItem("authToken", token.data.token);
    return true;
  });
};

export const logOut = () => {
  window.localStorage.removeItem("authToken");

  if (typeof axios.defaults.headers != "undefined") {
    console.log("yep");
    delete axios.defaults.headers["Authorization"];
  }
};

export default authenticate;
