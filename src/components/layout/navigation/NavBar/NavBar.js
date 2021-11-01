import React from "react";
import { Burger } from "../../ui";
import LinkNavigation from "../LinkNavigation/LinkNavigation";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { logOut } from "services/authApi";
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
          <div className="flex justify-between items-center">
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
            <LinkNavigation
              className="hidden my-1 text-gray-700 md:block dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              key="1"
              to="/"
            >
              Inscription
            </LinkNavigation>
            <div className="flex justify-center md:block">
              <Link
                to="/login"
                className="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-purple-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
                type="button"
              >
                Connexion
              </Link>

              <button
                onClick={logOut}
                className="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-red-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
                type="button"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
