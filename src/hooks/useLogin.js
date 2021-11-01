import { login, logout } from "actions/userAction";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { logOut, setAxiosToken } from "services/authApi";

const useLogin = () => {
  const dispatch = useDispatch();

  const appInit = (params) => {
    const token = window.localStorage.getItem("authToken");

    if (token) {
      const { exp: tokenExpiration } = jwtDecode(token);
      if (tokenExpiration * 1000 > new Date().getTime()) {
        setAxiosToken(token);
        dispatch(login());
      }
      console.log("YAY");
    } else {
      console.log("OW");
      logOut();
      dispatch(logout());
    }
  };

  return { appInit };
};

export default useLogin;
