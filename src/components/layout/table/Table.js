import { numberWithSpaces, roundedNumber } from "../../../utils";
import tw from "tailwind-styled-components";
import React, { useState } from "react";

// export default Table;

const renderData = (customers) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
      <div className="block w-full overflow-x-hidden">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="hidden md:block px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                ID
              </th>
              <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Client
              </th>
              <th className="hidden md:block px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Email
              </th>
              <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Entreprise
              </th>
              <th className="hidden lg:block px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Factures
              </th>
              <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Montant total
              </th>
              <th className=" hidden lg:block px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <>
              {customers.map((e) => {
                return (
                  <tr key={e.id}>
                    <TH>{e.id}</TH>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {e.firstNale} {e.lastName}
                    </td>
                    <td className="hidden md:block border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {e.email}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {e.company}
                    </td>
                    <td className="hidden lg:block border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {e.invoices.length}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {numberWithSpaces(roundedNumber(e.totalAmount))} €
                      {e.totalAmount}
                    </td>
                    <td className="hidden lg:block border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        className={` text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-red-500  ${
                          e.invoices.length > 0
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        type="button"
                        disabled={e.invoices.length > 0 ? true : false}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          </tbody>
        </table>
        <hr className="py-4" />*
      </div>
    </div>
  );
};

const Table = ({ customers }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(50);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(customers.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    currentPage + 1 < pages.slice(-1)[0] + 1 && setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    if (currentPage >= 2) {
      setcurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  // Not used here
  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <button
          className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-double-left"></i>
        </button>
        <button
          onClick={handlePrevbtn}
          className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-left"></i>
        </button>
        <>
          {pages.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <button
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={`  bg-transparent border-l border-t border-b border-purple-500   active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 ${
                    currentPage === number
                      ? "text-white   bg-purple-500"
                      : "text-purple-500 hover:text-white hover:bg-purple-500 "
                  }
                              `}
                  type="button"
                >
                  {number}
                </button>
              );
            } else {
              return null;
            }
          })}
        </>

        <button
          onClick={handleNextbtn}
          className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <button
          className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
      {renderData(currentItems)}
      <div className="flex items-center justify-center mb-4">
        <button
          className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-double-left"></i>
        </button>
        <button
          onClick={handlePrevbtn}
          className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-left"></i>
        </button>
        <>
          {pages.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <button
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={`  bg-transparent border-l border-t border-b border-purple-500   active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 ${
                    currentPage === number
                      ? "text-white   bg-purple-500"
                      : "text-purple-500 hover:text-white hover:bg-purple-500 "
                  }
                              `}
                  type="button"
                >
                  {number}
                </button>
              );
            }
          })}
        </>

        <button
          onClick={handleNextbtn}
          className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <button
          className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </>
  );
};

const TH = tw.th`
hidden
md:block
border-t-0
px-6
align-middle
border-l-0
border-r-0
text-xs
whitespace-nowrap
p-4
text-center
text-blueGray-700
`;
export default Table;
