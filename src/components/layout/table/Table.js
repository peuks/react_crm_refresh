import { numberWithSpaces, roundedNumber } from "../../../utils";
import tw from "tailwind-styled-components";
import React, { useState } from "react";

// export default Table;

const renderData = (customers) => {
  return (
    <div className="flex relative flex-col mb-6 w-full min-w-0 break-words bg-white rounded shadow-lg">
      <div className="block overflow-x-hidden w-full">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="hidden px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid md:block bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                Client
              </th>
              <th className="hidden px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid md:block bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                Entreprise
              </th>
              <th className="hidden px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid lg:block bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                Factures
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                Montant total
              </th>
              <th className="hidden px-6 py-3 text-xs font-semibold text-center uppercase align-middle whitespace-nowrap border border-r-0 border-l-0 border-solid  lg:block bg-blueGray-50 text-blueGray-500 border-blueGray-100">
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
                    <td className="p-4 px-6 text-xs align-middle whitespace-nowrap border-t-0 border-r-0 border-l-0">
                      {e.firstNale} {e.lastName}
                    </td>
                    <td className="hidden p-4 px-6 text-xs whitespace-nowrap border-t-0 border-r-0 border-l-0 md:block align-center">
                      {e.email}
                    </td>
                    <td className="p-4 px-6 text-xs whitespace-nowrap border-t-0 border-r-0 border-l-0 align-center">
                      {e.company}
                    </td>
                    <td className="hidden p-4 px-6 text-xs whitespace-nowrap border-t-0 border-r-0 border-l-0 lg:block align-center">
                      {e.invoices.length}
                    </td>
                    <td className="p-4 px-6 text-xs whitespace-nowrap border-t-0 border-r-0 border-l-0 align-center">
                      {numberWithSpaces(roundedNumber(e.totalAmount))} €
                    </td>
                    <td className="hidden p-4 px-6 text-xs whitespace-nowrap border-t-0 border-r-0 border-l-0 lg:block align-center">
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
      </div>
    </div>
  );
};

const Table = ({ customers }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
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
  const handleEndbtn = () => {
    if (currentPage !== pages.slice(-1)[0]) {
      setcurrentPage(pages.slice(-1)[0]);
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleStartbtn = () => {
    if (currentPage !== 1) {
      setcurrentPage(1);
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
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
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={handleStartbtn}
          className="px-4 py-2 mb-1 text-xs font-bold text-purple-500 uppercase bg-transparent rounded-l border-t border-b border-l border-purple-500 transition-all duration-150 ease-linear outline-none hover:bg-purple-500 hover:text-white active:bg-purple-600 focus:outline-none"
          type="button"
        >
          <i className="fas fa-angle-double-left"></i>
        </button>
        <button
          onClick={handlePrevbtn}
          className="px-4 py-2 mb-1 text-xs font-bold text-purple-500 uppercase bg-transparent border-t border-b border-l border-purple-500 transition-all duration-150 ease-linear outline-none hover:bg-purple-500 hover:text-white active:bg-purple-600 focus:outline-none"
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
          className="px-4 py-2 mb-1 text-xs font-bold text-purple-500 uppercase bg-transparent border border-purple-500 border-solid transition-all duration-150 ease-linear outline-none hover:bg-purple-500 hover:text-white active:bg-purple-600 focus:outline-none"
          type="button"
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <button
          onClick={handleEndbtn}
          className="px-4 py-2 mb-1 text-xs font-bold text-purple-500 uppercase bg-transparent rounded-r border-t border-r border-b border-purple-500 transition-all duration-150 ease-linear outline-none hover:bg-purple-500 hover:text-white active:bg-purple-600 focus:outline-none"
          type="button"
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
      {/* TABLE */}
      {renderData(currentItems)}
      {/* TABLE */}
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
