import React from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed">
      {/* // <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div class="overflow-hidden relative bg-white">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            class="hidden absolute inset-y-0 right-0 w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div class="relative px-4 pt-6 sm:px-6 lg:px-8"></div>

            {/* <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
            <div class="absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right md:hidden">
              <div class="overflow-hidden bg-white rounded-lg ring-1 ring-black ring-opacity-5 shadow-md">
                <div class="flex justify-between items-center px-5 pt-4">
                  <div>
                    <img
                      class="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close main menu</span>
                      {/* <!-- Heroicon name: outline/x --> */}
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>

                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <a
                  href="#"
                  class="block px-5 py-3 w-full font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>

          <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">All your customers </span>

                <span class="block text-indigo-600 xl:inline">
                  in one place
                </span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The best app to find and manage your customers and invoices.
                Send invoices, online paiement and email notification.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <Link
                    to="/login"
                    href="#"
                    class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3"></div>
              </div>
            </div>
          </main>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://source.unsplash.com/featured/?{office},{work}"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
