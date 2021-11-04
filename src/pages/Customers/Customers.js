import useCount from "hooks/useCount";
import useCustomers from "hooks/useCustomers";
import usePagination from "hooks/usePagination";
import tw from "tailwind-styled-components/dist/tailwind";
import SearchBar from "./Sections/SearchBar";
import SectionHeader from "./Sections/SectionHeader";
import TableCustomers from "./TableCustomers";
import Pagination from "./Sections/Pagination";
import { useState } from "react";
import useSearch from "hooks/useSearch";
import { Main } from "components/styles/Main";
const Customers = () => {
  /*********************
   * GET ALL CUSTOMERS *
   *********************/
  const { usersCustomers, searchedCustomers } = useCustomers();
  const [maxButtons] = useState(10);
  /**************
   * PAGINATION *
   **************/
  // set count
  const { count } = useCount(80);

  const { handleSearch, userInput, setUserInput } = useSearch(usersCustomers);

  const {
    currentPage,
    currentData,
    next,
    prev,
    index,
    goTO,
    maxPage,
  } = usePagination(searchedCustomers, count, maxButtons);
  const filteredData = currentData();

  /***************************************
   * SEND THE FILTERED DATA TO THE TABLE *
   ***************************************/
  return (
    <Main>
      <SectionHeader />
      <SearchBar
        setUserInput={setUserInput}
        usersCustomers={usersCustomers}
        handleSearch={handleSearch}
        userInput={userInput}
      />
      <TableCustomers customers={filteredData} />
      <Pagination
        next={next}
        prev={prev}
        currentPage={currentPage}
        maxPages={maxButtons}
        itemsPerPage={count}
        index={index}
        goTO={goTO}
        maxPage={maxPage}
      />
    </Main>
  );
};

export default Customers;
