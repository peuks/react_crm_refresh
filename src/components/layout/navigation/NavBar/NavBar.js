import React from "react";
import { Burger } from "../../ui";
import LinkNavigation from "../LinkNavigation/LinkNavigation";
import { v4 as uuidv4 } from "uuid";

const NavBar = () => {
  const path = [
    {
      label: "Clients",
      path: "/customers",
      key: uuidv4(),
    },
    {
      label: "Factures",
      path: "/invoices",
      key: uuidv4(),
    },
  ];
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <LinkNavigation logo={true} path="/">
                SymReact
              </LinkNavigation>
            </div>
            <div className="hidden items-center md:flex">
              <div className="flex flex-col md:flex-row md:mx-6">
                {path.map((e) => {
                  return (
                    <LinkNavigation key={e.key} path={e.path}>
                      {e.label}
                    </LinkNavigation>
                  );
                })}
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}

            <Burger />
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className="hidden items-center md:flex">
            <div className="flex justify-center md:block">
              {/* <LinkNavigation key="1" to="/">
                Inscription
              </LinkNavigation> */}
              <button
                className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                disabled={true}
              >
                Connexion
              </button>

              {/* <button
                className="bg-red-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Déconnexion
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
