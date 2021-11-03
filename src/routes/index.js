import React from "react";
import {
  CustomerAdd,
  Customers,
  Customers2,
  Home2,
  Invoices,
  Login,
} from "@pages";
import RenderRoutes from "components/routing/RenderRoutes";
const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: RenderRoutes, // here's the update
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        protected: false,
        component: () => <Home2 />,
      },
      {
        path: "/customers",
        key: "APP_CUSTOMERS",
        exact: true,
        protected: true,
        component: () => <Customers />,
      },
      {
        path: "/customers2",
        key: "APP_CUSTOMERS",
        exact: true,
        protected: true,
        component: () => <Customers2 />,
      },
      {
        path: "/invoices",
        key: "APP_INVOICES",
        exact: true,
        protected: true,
        component: () => <Invoices />,
      },
      {
        path: "/customers/:id",
        key: "APP_CUSTOMERS_ADD",
        exact: true,
        protected: true,
        component: () => <CustomerAdd />,
      },
      {
        path: "/login",
        key: "APP_LOGIN",
        exact: true,
        protected: false,
        component: () => <Login />,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        protected: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;
