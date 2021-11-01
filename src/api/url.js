// const key = "7df80adea0014ebabf6d0b7ce6e9fbe9"; // YOUR KEY GOES HERE
// const key = process.env.REACT_APP_RAWG_API_KEY;

//Base URL
const base_url = "http://localhost:8000/api";
const version = "v1";

const customers = "customers";
const invoices = "invoices";

export const allCustomersURL = () =>
  `${base_url}/${version}/${customers}/?pagination=false`;

export const invoicesURL = () =>
  `${base_url}/${version}/${invoices}/?pagination=false`;

export const invoiceURL = (id) => `${base_url}/${version}/${invoices}/${id}`;

export const customerURL = (id) => `${base_url}/${version}/${customers}/${id}`;
