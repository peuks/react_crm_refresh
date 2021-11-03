const initState = {
  usersCustomers: [],
  usersCustomer: {},
  totalCustomers: 0,
  invoices: [],
  hasLoaded: false,

  totalInvoices: 0,
  searchedCustomers: [],
  searchedInvoices: [],
};

const customersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADED_CUSTOMER":
      return {
        ...state,
        hasLoaded: action.payload.hasLoaded,
      };

    case "FETCH_CUSTOMERS":
      return {
        ...state,
        usersCustomers: action.payload.usersCustomers,
        searchedCustomers: action.payload.usersCustomers,
        totalCustomers: action.payload.totalCustomers,
        hasLoaded: true,
      };
    case "FETCH_CUSTOMER":
      return {
        ...state,
        usersCustomer: action.payload.usersCustomer,
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
    case "RESET_INVOICES":
      return {
        ...state,
        invoices: [],
        totalInvoices: 0,
        searchedInvoices: [],
      };
    case "RESET_CUSTOMERS":
      return {
        ...state,
        usersCustomers: [],
        totalCustomers: 0,
        searchedCustomers: [],
      };
    default:
      return { ...state };
  }
};

export default customersReducer;
