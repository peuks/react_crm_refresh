import axios from "axios";
import { allCustomersURL, customersURL } from "api/url";
import { getCustomersFromApi } from "api/handler";

/**
 *
 * @param {*} id
 * @returns
 */
export const loadCustomer = (id) => async (dispatch) => {
  //FETCH AXIOS
  let customer = await axios.get(customersURL(id));
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
  const allCustomers = await getCustomersFromApi();
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
 *
 * @param {*} toggle
 * @returns true | false
 */
export const setLoadCustomers = (toggle) => async (dispatch) => {
  dispatch({
    type: "LOADED_INVOICE",
    payload: {
      hasLoaded: toggle,
    },
  });
};

export const resetCustomers = () => async (dispatch) => {
  dispatch({
    type: "RESET_CUSTOMERS",
  });
};
