import axios from "axios";
import { allCustomersURL, customerURL } from "../api/url";

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
    },
  });
};

export const deleteCustomer = (id, customers) => async (dispatch) => {
  const deleteCustomer = await axios.delete(customerURL(id));
  console.log(deleteCustomer);
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
