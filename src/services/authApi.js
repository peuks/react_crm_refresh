import { loginURL } from "api/url";
import axios from "axios";
import jwtDecode from "jwt-decode";

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

export const setAxiosToken = (token) => {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
};
export const setup = (params) => {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp: tokenExpiration } = jwtDecode(token);
    if (tokenExpiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    }
    console.log("YAY");
  } else {
    console.log("OW");
    logOut();
  }
};

export default authenticate;
