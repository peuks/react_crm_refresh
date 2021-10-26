const initState = {
  usersCustomers: [],
  totalCustomers: 0,
  // searched: [],
};

const customersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
        totalCustomers: action.payload.totalCustomers,
      };
    case "DELETE_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
      };
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
