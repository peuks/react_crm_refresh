const initState = {
  usersCustomers: [],
  // newGames: [],
  // searched: [],
};

const customersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
      };
    // case "FETCH_SEARCHED":
    //   return {
    //     ...state,
    //     searched: action.payload.searched,
    //   };
    // case "CLEAR_SEARCHED":
    //   return {
    //     ...state,
    //     searched: [],
    //   };
    default:
      return { ...state };
  }
};

export default customersReducer;
