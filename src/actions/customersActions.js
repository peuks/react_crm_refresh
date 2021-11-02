import axios from "axios";
import {
  allCustomersURL,
  customersURL,
  invoicesURL,
  invoiceURL,
} from "../api/url";

// Action Creator
/**
 * Fetch Data and distpath an object with a type of FESTCH_GAME
 * @returns
 */
export const loadCustomer = (id) => async (dispatch) => {
  //FETCH AXIOS
  const customer = await axios.get(customersURL(id));
  delete customer.data.user;
  dispatch({
    type: "FETCH_CUSTOMER",
    payload: {
      usersCustomer: customer.data,
    },
  });
};

/**
 * Fetch Data and distpath an object with a type of FESTCH_GAME
 * @returns
 */
export const loadCustomers = () => async (dispatch) => {
  //FETCH AXIOS
  const allCustomers = await axios.get(allCustomersURL());

  dispatch({
    type: "FETCH_CUSTOMERS",
    payload: {
      usersCustomers: allCustomers.data["hydra:member"],
      totalCustomers: allCustomers.data["hydra:totalItems"],
    },
  });
};

export const customersSearch = (result) => async (dispatch) => {
  dispatch({
    type: "SEARCHED_CUSTOMERS",
    payload: {
      searched: result,
    },
  });
};
export const resetSearchResult = (initialValue) => async (dispatch) => {
  dispatch({
    type: "SEARCHED_CUSTOMERS",
    payload: {
      searched: initialValue,
    },
  });
};

export const deleteCustomer = (id, customers) => async (dispatch) => {
  const deleteCustomer = await axios.delete(customersURL(id));
  dispatch({
    type: "DELETE_CUSTOMERS",
    payload: {
      usersCustomers: () => {
        customers.filter((customer) => customer.id !== id);
        return deleteCustomer ? customers : "";
      },
    },
  });
};
/**
 * Fetch Data and distpath an object with a type of FESTCH_GAME
 * @returns
 */
export const loadInvoices = () => async (dispatch) => {
  //FETCH AXIOS
  const invoices = await axios.get(invoicesURL());
  // const newGamesData = await axios.get(newGamesURL());
  // const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_INVOICES",
    payload: {
      invoices: invoices.data["hydra:member"],
      totalInvoices: invoices.data["hydra:totalItems"],
    },
  });
};

export const resetInvoices = () => async (dispatch) => {
  dispatch({
    type: "RESET_INVOICES",
  });
};

export const resetCustomers = () => async (dispatch) => {
  dispatch({
    type: "RESET_CUSTOMERS",
  });
};

export const invoicesSearch = (result) => async (dispatch) => {
  dispatch({
    type: "SEARCHED_INVOICES",
    payload: {
      searchedInvoices: result,
    },
  });
};

export const deleteInvoice = (id, invoices) => async (dispatch) => {
  const { status } = await axios.delete(invoiceURL(id));
  console.log(invoices, invoices.length);
  const filtered = invoices.filter((invoices) => invoices.id !== id);
  console.log(filtered.length);
  // console.log(filtered.length);

  // console.log(invoices);
  dispatch({
    type: "DELETE_INVOICE",
    payload: {
      searchedInvoices: status === 204 ? filtered : invoices,
    },
  });
};
