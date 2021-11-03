const initState = {
  invoices: [],
  totalInvoices: 0,
  searchedInvoices: [],
  hasLoaded: false,
};

const invoicesReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADED_INVOICE":
      return {
        ...state,
        hasLoaded: action.payload.hasLoaded,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedInvoices: [],
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
    default:
      return { ...state };
  }
};

export default invoicesReducer;
