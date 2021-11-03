import axios from "axios";
import { invoicesURL, invoiceURL } from "api/url";

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
  dispatch({
    type: "DELETE_INVOICE",
    payload: {
      searchedInvoices: status === 204 ? filtered : invoices,
    },
  });
};

/**
 *
 * @param {*} toggle
 * @returns true | false
 */
export const setLoadInvoice = (toggle) => async (dispatch) => {
  dispatch({
    type: "LOADED_INVOICE",
    payload: {
      hasLoaded: toggle,
    },
  });
};
