import React from "react";
import useInvoices from "hooks/useInvoices";
import Table2 from "components/layout/table2/Table2";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { fade } from "animations";
import { deleteInvoice } from "actions/invoicesActions";

const Invoices2 = () => {
  const { searchedInvoices } = useInvoices();
  const dispatch = useDispatch();
  // const { handleSearch, userInput, setUserInput } = useSearch(usersCustomers);
  const handleDelete = (e) => {
    dispatch(deleteInvoice(Number(e.target.id), searchedInvoices));
  };

  return (
    <motion.div
      animate="show"
      exit="exit"
      initial="hidden"
      variants={fade}
      className="container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed"
    >
      <h1 className="pb-8 text-4xl">Liste des factures</h1>
      {/* <Search
        setUserInput={setUserInput}
        usersCustomers={usersCustomers}
        handleSearch={handleSearch}
        userInput={userInput}
      /> */}
      {searchedInvoices && (
        <Table2 handleDelete={handleDelete} invoices={searchedInvoices} />
      )}
    </motion.div>
  );
};

export default Invoices2;
