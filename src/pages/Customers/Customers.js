import { fade } from "animations";
import { Table, Search } from "components/layout";
import { motion } from "framer-motion";
import useCustomers from "hooks/useCustomers";
import useSearch from "hooks/useSearch";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";
const Customers = () => {
  const { usersCustomers, searchedCustomers } = useCustomers();
  const { handleSearch, userInput, setUserInput } = useSearch(usersCustomers);

  return (
    <Container animate="show" exit="exit" initial="hidden" variants={fade}>
      <div className="flex justify-between items-start">
        <h1 className="pb-8 text-4xl">Liste des clients</h1>
        <Link
          to="/customers/new"
          class="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-purple-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
          type="button"
        >
          <div className="flex gap-2 items-center">
            <IoAddCircle size={"1.2rem"} /> New Client
          </div>
        </Link>
      </div>
      <Search
        setUserInput={setUserInput}
        usersCustomers={usersCustomers}
        handleSearch={handleSearch}
        userInput={userInput}
      />

      {searchedCustomers && <Table customers={searchedCustomers} />}
    </Container>
  );
};

const Container = tw(
  motion.main
)`container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed`;
export default Customers;
