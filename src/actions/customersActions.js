import axios from "axios";
import { allCustomersURL } from "../api/url";

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

// export const fetchSearch = (gameName) => async (dispatch) => {
//   const searchGames = await axios.get(searchGameURL(gameName));

//   dispatch({
//     type: "FETCH_SEARCHED",
//     payload: {
//       searched: searchGames.data.results,
//     },
//   });
// };
