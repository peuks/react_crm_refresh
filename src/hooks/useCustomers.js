import { loadCustomers } from "actions/customersActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useCustomers = () => {
  // FETCH Clients
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  const { usersCustomers, searched } = useSelector((state) => state.customers);

  return { usersCustomers, searched };
};

export default useCustomers;
