import { loadCustomer, loadCustomers } from "actions/customersActions";
import { customersURL, customerURLWithoutId } from "api/url";
import axios from "axios";
import { Select2 } from "components/forms";

import ErrorFiled from "components/forms/Error/ErrorFiled";
import Input from "components/forms/Input/Input";
import Label from "components/forms/Label/Label";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

const InvoiceAdd = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const template = {
    amount: "",
    customer: "",
    status: "",
  };

  const [invoice, setInvoice] = useState(template);
  const [errors, setErrors] = useState(template);
  const [editing, setEditing] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);

    // setInvoice({ ...invoice, [currentTarget.name]: currentTarget.value });
    // setInvoice({ ...invoice, [currentTarget.name]: currentTarget.value });
  };
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(invoice);
    // try {
    //   setErrors(template);
    //   if (editing) {
    //     const { status, amount, customer } = customer;
    //     const resp = { status, amount, customer };
    //     await axios.put(customersURL(id), resp);

    //     history.replace("/customers");
    //     // toast.success("Le client a bien été modifié !");
    //   } else {
    //     await axios.post(customerURLWithoutId(), customer);
    //     // toast.success("Le client a bien été créé !");
    //     history.replace("/customers");
    //   }
    // } catch ({ response }) {
    //   const { violations } = response.data;
    //   if (violations) {
    //     const apiErrors = {};
    //     violations.forEach(({ propertyPath, message }) => {
    //       apiErrors[propertyPath] = message;
    //     });
    //     setErrors(apiErrors);
    //   }
    // }
  };
  const { usersCustomer } = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  dispatch(loadCustomers());
  useEffect(() => {
    // console.log(usersCustomer);
    if (id !== "new") {
      setEditing(true);
      dispatch(loadCustomer(id));

      setInvoice(usersCustomer);

      setTimeout(() => {
        setisLoading(false);
      }, 1000);
    } else {
      setisLoading(false);
      dispatch(loadCustomers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // SELECT 1
  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const { usersCustomers } = useSelector((state) => state.customers);

  useEffect(() => {
    let test = [];
    usersCustomers.map((e) => {
      test.push({
        value: e.id,
        label: `${e.company}:  ${e.firstName} ${e.lastName}`,
      });
    });
    setOptions(test);
  }, []);

  // SELECT2
  // SELECT 1
  const [options1] = useState([
    { value: "PAID", label: "PAID" },
    { value: "SENT", label: "SENT" },
    { value: "PENDING", label: "PENDING" },
  ]);
  const [selectedOption1, setSelectedOption1] = useState(null);

  useEffect(() => {}, []);
  return (
    <div className="p-5 m-4 mx-auto my-8 w-full max-w-screen-md text-center bg-white rounded-xl border-2 border-gray-300 border-dashed">
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
        defer
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <div class="overflow-hidden w-full text-gray-500 bg-gray-100 rounded shadow-xl">
        <div class="w-full md:flex">
          <div className="px-5 py-10 w-full md:px-10">
            <div class="mb-10 text-center">
              <h1 class="text-3xl font-bold text-gray-900">Invoice</h1>
              {id ? (
                <p>Edit Invoice</p>
              ) : (
                <p>Enter your information to register</p>
              )}
            </div>
            {!isLoading && (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <Label>Choose customer</Label>

                  <Select2
                    options={options}
                    selectedOption={selectedOption}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <Select2
                    options={options1}
                    selectedOption={selectedOption1}
                    setSelectedOption={setSelectedOption1}
                  />
                </div>

                {/* INPUT */}
                <div class="flex -mx-3">
                  <div class="px-3 mb-5 w-full">
                    <Label>Amount</Label>
                    <div class="flex">
                      <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
                        <i class="text-lg text-gray-400 mdi mdi-email-outline"></i>
                      </div>
                      <Input
                        onChange={handleChange}
                        value={invoice.amount}
                        // error={customer.email}
                        name="amount"
                        type="number"
                      />
                    </div>
                    {/* {errors.invoice && <ErrorFiled>{errors.email}</ErrorFiled>} */}
                  </div>
                </div>
                {/* INPUT */}
                {/* INPUT */}

                {/* INPUT */}
                <div class="flex -mx-3">
                  <div class="px-3 mb-5">
                    <input
                      type="submit"
                      className="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-purple-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
                      value={id ? "Editer" : "Creer"}
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAdd;
