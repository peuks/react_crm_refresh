import { loadCustomers, loadInvoices } from "actions/customersActions";
import { login } from "actions/userAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import authenticate from "services/authApi";
import tw from "tailwind-styled-components/dist/tailwind";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Inputs handling
  const handleChanged = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };
  const history = useHistory();
  const dispatch = useDispatch();
  // Submit handling
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authenticate(credentials);
      setError(false);
      dispatch(login());
      dispatch(loadInvoices());
      dispatch(loadCustomers());
      history.replace("/");
    } catch (error) {
      setError("Wrong password or Email");
    }
  };

  const { isAuthenticated } = useSelector((state) => state.user);
  isAuthenticated && history.push("/");

  return (
    <div class="flex relative flex-col flex-grow justify-center items-center bg-gray-100">
      <div class="relative w-full max-w-sm">
        <CardBlue />
        <CardRed />
        <CardWhite>
          <label
            for=""
            class="block mt-3 text-sm font-semibold text-center text-gray-700"
          >
            Login
          </label>

          <form onSubmit={handleSubmit} method="#" action="#" class="mt-10">
            <Block>
              <Input
                // Inputs handling
                onChange={handleChanged}
                value={credentials.username}
                name="username"
                id="username"
                type="email"
                placeholder="Email"
              />
            </Block>

            <Block>
              <Input
                // Inputs handling
                onChange={handleChanged}
                value={credentials.password}
                name="password"
                id="password"
                placeholder="Password"
              />
            </Block>

            <ErrorMessage error={error} />
            <div class="flex mt-7">
              <label
                for="remember_me"
                class="inline-flex items-center w-full cursor-pointer"
              >
                <input id="remember_me" type="checkbox" name="remember" />
                <span class="ml-2 text-sm text-gray-600">Recuerdame</span>
              </label>

              <div class="w-full text-right">
                <Link
                  class="text-sm text-gray-600 underline hover:text-gray-900"
                  to="/"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
            </div>

            <Block>
              <Button color="text-white bg-blue-500">Login</Button>
            </Block>

            <div class="flex items-center mt-7 text-center">
              <hr class="w-full rounded-md border-gray-300 border-1" />
              <label class="block w-full text-sm font-medium text-gray-600">
                Accede con
              </label>
              <hr class="w-full rounded-md border-gray-300 border-1" />
            </div>

            <div class="flex justify-center mt-7 w-full">
              <button class="px-4 py-2 mr-5 text-white bg-blue-500 rounded border-none shadow-xl transition duration-500 ease-in-out transform cursor-pointer hover:shadow-inner hover:-translate-x hover:scale-105">
                Facebook
              </button>

              <button class="px-4 py-2 text-white bg-red-500 rounded border-none shadow-xl transition duration-500 ease-in-out transform cursor-pointer hover:shadow-inner hover:-translate-x hover:scale-105">
                Google
              </button>
            </div>

            <Block>
              <div class="flex justify-center items-center">
                <label class="mr-2">¿Eres nuevo?</label>
                <Link
                  to="/"
                  class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Crea una cuenta
                </Link>
              </div>
            </Block>
          </form>
        </CardWhite>
      </div>
    </div>
  );
};

const Input = tw.input` px-4 mt-1 w-full h-11 bg-gray-100 rounded border-none shadow-lg outline-none hover:bg-blue-100 focus:bg-blue-100 focus:ring-0`;
const CardRed = tw.div` absolute w-full h-full bg-red-400 rounded shadow-lg transform rotate-6 card`;
const CardBlue = tw.div` absolute w-full h-full bg-blue-400 rounded shadow-lg transform -rotate-6 card`;
const CardWhite = tw.div`relative px-6 py-4 w-full bg-gray-100 rounded shadow-md`;
const Block = tw.div`
mt-7`;

const ErrorMessage = ({ error }) => {
  return (
    <>
      {error ? (
        <Block>
          <div
            class="flex items-center p-2 w-full h-11 text-sm text-left text-red-500 border-none outline-none"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="pr-0.5 mr-2 w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            {error}
          </div>
        </Block>
      ) : (
        ""
      )}
    </>
  );
};

const Button = ({ children, color }) => {
  return (
    <button
      className={
        "py-3 w-full  rounded shadow-xl transition duration-500 ease-in-out transform hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 " +
        color
      }
    >
      {children}
    </button>
  );
};

export default Login;
