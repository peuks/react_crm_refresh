import { loadCustomers } from "actions/customersActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**
 * If customers have not been fetch from the api , then fetch and set usersCustomers and
 * searchedCustomers
 * @returns customers
 */
const useCustomers = () => {
  const { usersCustomers, searchedCustomers, hasLoaded } = useSelector(
    (state) => state.customers
  );

  // FETCH Clients
  const dispatch = useDispatch();
  useEffect(() => {
    !hasLoaded && dispatch(loadCustomers());
  }, [dispatch, hasLoaded]);

  return { usersCustomers, searchedCustomers };
};

export default useCustomers;
