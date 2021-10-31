import axios from "axios";
import { allCustomersURL, customerURL, invoicesURL } from "../api/url";

// Action Creator

/**
 * Fetch Data and distpath an object with a type of FESTCH_GAME
 * @returns
 */
export const loadCustomers = () => async (dispatch) => {
  //FETCH AXIOS
  const allCustomers = await axios.get(allCustomersURL());
  // const newGamesData = await axios.get(newGamesURL());
  // const upcomingData = await axios.get(upcomingGamesURL());
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
  console.log("test");
  dispatch({
    type: "SEARCHED_CUSTOMERS",
    payload: {
      searched: initialValue,
    },
  });
};

export const deleteCustomer = (id, customers) => async (dispatch) => {
  const deleteCustomer = await axios.delete(customerURL(id));
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

export const invoicesSearch = (result) => async (dispatch) => {
  dispatch({
    type: "SEARCHED_INVOICES",
    payload: {
      searchedInvoices: result,
    },
  });
};
