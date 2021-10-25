import React from "react";
import { numberWithSpaces, roundedNumber } from "../../../utils";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../../actions/customersActions";

const Table = ({ customers }) => {
  const dispatch = useDispatch();

  const deleteCustomerHandler = (id, customers) => {
    dispatch(deleteCustomer(id, customers));
  };
  const test = () => {
    console.log("working");
  };
  return (
    <>
      {customers.length > 0 && (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
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
                            onClick={() =>
                              deleteCustomerHandler(e.id, customers)
                            }
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
      )}
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
