import { customersSearch, resetSearchResult } from "actions/customersActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "./useDebounce";

/**
 *
 * @param {*} usersCustomers
 * @returns
 */
const useSearch = (usersCustomers) => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  useDebounce(
    () => {
      userInput.length === 0
        ? dispatch(resetSearchResult(usersCustomers))
        : dispatch(customersSearch(getSearchResult(userInput)));
    },
    1000,
    [userInput]
  );

  const getSearchResult = (userInput) => {
    return (
      usersCustomers.length > 0 &&
      usersCustomers
        .filter(
          (word) =>
            word.company.toLowerCase().includes(userInput.toLowerCase()) ||
            word.email.toLowerCase().includes(userInput.toLowerCase()) ||
            word.firstName.toLowerCase().includes(userInput.toLowerCase()) ||
            word.lastName.toLowerCase().includes(userInput) ||
            word.totalAmount >= userInput ||
            word.id === userInput
        )
        .sort()
        .splice(0, 5)
    );
  };

  const handleSearch = (value) => {
    const input = value.target.value;
    setUserInput(input);
  };

  return {
    userInput,
    handleSearch,
  };
};

export default useSearch;
