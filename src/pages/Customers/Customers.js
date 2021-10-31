import React, { useState } from "react";

import { Table, Search } from "components/layout";
import useCustomers from "hooks/useCustomers";
import useSearch from "hooks/useSearch";

const Customers = () => {
  const { usersCustomers, searchedCustomers } = useCustomers();
  const { handleSearch, userInput, setUserInput } = useSearch(usersCustomers);

  console.log(searchedCustomers);
  return (
    <div className="container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed">
      <h1 className="pb-8 text-4xl">Liste des clients</h1>
      <Search
        setUserInput={setUserInput}
        usersCustomers={usersCustomers}
        handleSearch={handleSearch}
        userInput={userInput}
      />

      {searchedCustomers && <Table customers={searchedCustomers} />}
    </div>
  );
};

export default Customers;
