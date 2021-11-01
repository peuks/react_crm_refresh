const initState = {
  usersCustomers: [],
  totalCustomers: 0,
  invoices: [],
  totalInvoices: 0,
  searchedCustomers: [],
  searchedInvoices: [],
};

const customersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
        searchedCustomers: action.payload.usersCustomers,
        totalCustomers: action.payload.totalCustomers,
      };
    case "DELETE_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
      };
    case "SEARCHED_CUSTOMERS":
      return {
        ...state,
        searchedCustomers: action.payload.searched,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedCustomers: [],
      };
    case "FETCH_INVOICES":
      return {
        ...state,
        invoices: action.payload.invoices,
        searchedInvoices: action.payload.invoices,
        totalInvoices: action.payload.totalInvoices,
      };
    case "SEARCHED_INVOICES":
      return {
        ...state,
        searchedInvoices: action.payload.searchedInvoices,
      };
    case "DELETE_INVOICE":
      return {
        ...state,
        searchedInvoices: action.payload.searchedInvoices,
        invoices: action.payload.searchedInvoices,
      };
    default:
      return { ...state };
  }
};

export default customersReducer;
