import React, { useState } from "react";

import { Table, Search } from "components/layout";
import useCustomers from "hooks/useCustomers";
import useSearch from "hooks/useSearch";
import useInvoices from "hooks/useInvoices";
import Table2 from "components/layout/table2/Table2";

const Customers = () => {
  const { invoices, searchedInvoices } = useInvoices();

  // const { handleSearch, userInput, setUserInput } = useSearch(usersCustomers);

  console.log(searchedInvoices);

  return (
    <div className="container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed">
      <h1 className="pb-8 text-4xl">Liste des factures</h1>
      {/* <Search
        setUserInput={setUserInput}
        usersCustomers={usersCustomers}
        handleSearch={handleSearch}
        userInput={userInput}
      /> */}
      {searchedInvoices && <Table2 invoices={searchedInvoices} />}
    </div>
  );
};

export default Customers;
