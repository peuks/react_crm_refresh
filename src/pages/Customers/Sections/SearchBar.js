import React from "react";

const SearchBar = ({ handleSearch, userInput }) => {
  return (
    <div className="flex relative flex-wrap items-stretch mb-3 w-full">
      <span className="absolute z-10 justify-center items-center py-3 pl-3 w-8 h-full text-base font-normal leading-snug text-center text-gray-400 bg-transparent rounded">
        <i className="fas fa-search"></i>
      </span>
      <input
        onChange={handleSearch}
        value={userInput}
        type="text"
        placeholder="Search"
        className="relative px-3 py-3 pl-10 w-full text-sm placeholder-gray-400 text-gray-600 bg-white rounded border border-gray-400 outline-none focus:outline-none focus:ring"
      />
    </div>
  );
};

export default SearchBar;