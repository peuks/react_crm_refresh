import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../components/layout";
import { loadCustomers } from "../../actions/customersActions";

const Customers = () => {
  //
  // FETCH Clients
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  const { usersCustomers } = useSelector((state) => state.customers);
  // console.log();
  return (
    <div className="container w-full  p-5 m-4 mx-auto my-16 text-center bg-white border-2 border-gray-300 border-dashed  rounded-xl">
      <h1 className="text-4xl pb-8">Liste des clients</h1>

      {usersCustomers && <Table customers={usersCustomers} />}
    </div>
  );
};

export default Customers;
