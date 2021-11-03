import { loadCustomers } from "actions/customersActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
