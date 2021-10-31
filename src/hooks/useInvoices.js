import { loadInvoices } from "actions/customersActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useInvoices = () => {
  // FETCH Clients
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInvoices());
  }, [dispatch]);

  const { invoices, searchedInvoices } = useSelector(
    (state) => state.customers
  );

  return { invoices, searchedInvoices };
};

export default useInvoices;
