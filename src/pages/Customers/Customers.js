import React from "react";
import { Table } from "../../components/layout";

const Customers = () => {
  return (
    <div className="container w-full  p-10 m-4 mx-auto my-16 text-center bg-white border-2 border-gray-300 border-dashed  rounded-xl">
      <h1 className="text-4xl pb-8">Liste des clients</h1>
      <div className="">
        <Table />
      </div>{" "}
    </div>
  );
};

export default Customers;
