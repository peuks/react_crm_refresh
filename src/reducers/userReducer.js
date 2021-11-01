const initState = {
  isAuthenticated: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATION":
      return {
        ...state, //Return all state, we're not modifing anything
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "SET_LOGOUT":
      return {
        ...state, //Return all state, we're not modifing anything
        isAuthenticated: action.payload.isAuthenticated,
      };

    default:
      return { ...state };
  }
};

export default userReducer;
