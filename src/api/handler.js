import axios from "axios";
import { allCustomersURL } from "./url";

export const getCustomersFromApi = async () => {
  const res = await axios.get(allCustomersURL());
  return res;
};
