import { logOut } from "services/authApi";

export const login = () => async (dispatch) => {
  dispatch({
    type: "SET_AUTHENTICATION",
    payload: {
      isAuthenticated: true,
    },
  });
};

export const logout = () => async (dispatch) => {
  logOut();
  dispatch({
    type: "SET_LOGOUT",
    payload: {
      isAuthenticated: false,
    },
  });
};
