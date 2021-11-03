import React from "react";

const Pagination = ({
  next,
  prev,
  currentPage,
  index,
  maxPages,
  goTO,
  maxPage,
}) => {
  return (
    <div class="flex justify-between items-center py-4 mx-auto w-full border-t border-gray-200 lg:w-3/5">
      <div class="flex items-center pt-3 text-gray-600 cursor-pointer hover:text-purple-700">
        <button
          onClick={prev}
          className="flex gap-2 items-center ml-3 text-lg font-medium leading-none"
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Previous
        </button>
      </div>
      <div class="hidden sm:flex">
        {[...Array(maxPages).keys()]
          .map((x) => x + index)
          .map((currElement) => {
            return currElement + 1 < maxPage ? (
              <button
                onClick={goTO}
                id={currElement}
                href="#!1"
                className={`px-2 pt-3 mr-4 text-lg font-medium leading-none text-gray-600 border-t border-transparent cursor-pointer hover:text-purple-700 hover:border-purple-400 ${
                  currElement === currentPage
                    ? "text-purple-700  border-purple-400"
                    : " text-gray-600  border-transparent hover:text-purple-700 hover:border-purple-400"
                }`}
              >
                {currElement}
              </button>
            ) : (
              ""
            );
          })}
      </div>
      <div class="flex items-center pt-3 text-gray-600 cursor-pointer hover:text-purple-700">
        <button
          onClick={next}
          className="flex gap-2 items-center ml-3 text-lg font-medium leading-none"
        >
          Next
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
