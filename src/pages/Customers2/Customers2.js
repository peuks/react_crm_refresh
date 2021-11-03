import useCount from "hooks/useCount";
import useCustomers from "hooks/useCustomers";
import usePagination from "hooks/usePagination";
import tw from "tailwind-styled-components/dist/tailwind";
import SearchBar from "./Sections/SearchBar";
import SectionHeader from "./Sections/SectionHeader";
import TableCustomers from "./TableCustomers";
import Pagination from "./Sections/Pagination";
import { useEffect, useState } from "react";
import useSearch from "hooks/useSearch";
const Customers = () => {
  /*********************
   * GET ALL CUSTOMERS *
   *********************/
  const { usersCustomers, searchedCustomers } = useCustomers();
  const [maxButtons] = useState(4);
  /**************
   * PAGINATION *
   **************/
  // set count
  const { count, setCount } = useCount(10);

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

const Main = tw.main`container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed`;
export default Customers;
