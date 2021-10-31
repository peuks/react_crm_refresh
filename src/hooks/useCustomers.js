import { loadCustomers } from "actions/customersActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useCustomers = () => {
  // FETCH Clients
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  const { usersCustomers, searchedCustomers } = useSelector(
    (state) => state.customers
  );

  return { usersCustomers, searchedCustomers };
};

export default useCustomers;
