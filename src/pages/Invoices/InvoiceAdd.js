import { invoicesURL, invoicesURLWithouthPagination } from "api/url";
import axios from "axios";
import { Main } from "components/styles/Main";
import { useCustomers } from "hooks";
import React, { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import SelectInput from "./FormInputs/Select";
const InvoiceAdd = () => {
  const [invoice, setinvoice] = useState({
    amount: 2,
    customer: "",
    status: "",
  });

  const handleChange = ({ currentTarget }) => {
    setinvoice({ ...invoice, [currentTarget.name]: currentTarget.value });
    console.log(invoice);
  };

  const { usersCustomers } = useCustomers();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send an invoice copy and update an input
      console.log({
        ...invoice,
        customer: `/api/customers/${invoice.customer}`,
      });
      await axios.post(invoicesURLWithouthPagination(), {
        ...invoice,
        customer: `/api/customers/${invoice.customer}`,
      });
      // toast.success("Le client a bien été créé !");
      // history.replace("/customers");
    } catch ({ response }) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        // setErrors(apiErrors);
      }
    }
  };

  return (
    <Main>
      {/*  */}
      <div class="overflow-hidden mx-auto max-w-screen-md text-gray-500 bg-gray-100 rounded shadow-xl">
        <div class="w-full">
          <div class="px-5 py-10 w-full md:px-10">
            <div class="mb-10 text-center">
              <H1>New invoice</H1>
              <p>More money in the pocket</p>
            </div>
            <form onSubmit={handleSubmit}>
              <Field
                handleChange={handleChange}
                label="Amount"
                type="text"
                value={invoice.amount}
                name="amount"
              />
              <SelectInput
                handleChange={handleChange}
                data={usersCustomers}
                type="customer"
              />
              <SelectInput
                handleChange={handleChange}
                type="status"
                data={[
                  { value: "SENT", label: "SENT" },
                  { value: "PAID", label: "PAID" },
                  { value: "CANCELD", label: "CANCELD" },
                ]}
              />
              <Button />
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Field = ({ label, name, type, value, handleChange }) => {
  return (
    <div class="flex -mx-3">
      <div class="px-3 mb-5 w-full">
        <label for="" class="px-1 text-xs font-semibold">
          {label}
        </label>
        <div class="flex">
          <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
            <i class="text-lg text-gray-400 mdi mdi-email-outline"></i>
          </div>
          <input
            onChange={handleChange}
            error=""
            name={name}
            type={type}
            class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <div class="flex -mx-3">
      <div class="px-3 mb-5">
        <input
          type="submit"
          class="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-purple-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
          value="Editer"
        />
      </div>
    </div>
  );
};

export default InvoiceAdd;
const H1 = tw.header`pb-8 text-4xl`;
const Header = tw.header`flex justify-between items-start`;
