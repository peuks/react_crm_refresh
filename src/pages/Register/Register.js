import React from "react";

const Register = () => {
  return (
    <div className="container p-5 m-4 mx-auto my-8 w-full text-center bg-white rounded-xl border-2 border-gray-300 border-dashed">
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
          <div class="hidden px-0 py-0 w-1/2 bg-indigo-500 md:block">
            <img
              src="https://source.unsplash.com/featured/?{register},{login}"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div class="px-5 py-10 w-full md:w-1/2 md:px-10">
            <div class="mb-10 text-center">
              <h1 class="text-3xl font-bold text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="px-3 mb-5 w-1/2">
                  <label for="" class="px-1 text-xs font-semibold">
                    First name
                  </label>
                  <div class="flex">
                    <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
                      <i class="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input
                      type="text"
                      class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div class="px-3 mb-5 w-1/2">
                  <label for="" class="px-1 text-xs font-semibold">
                    Last name
                  </label>
                  <div class="flex">
                    <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
                      <i class="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input
                      type="text"
                      class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="px-3 mb-5 w-full">
                  <label for="" class="px-1 text-xs font-semibold">
                    Email
                  </label>
                  <div class="flex">
                    <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
                      <i class="text-lg text-gray-400 mdi mdi-email-outline"></i>
                    </div>
                    <input
                      type="email"
                      class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="px-3 mb-12 w-full">
                  <label for="" class="px-1 text-xs font-semibold">
                    Password
                  </label>
                  <div class="flex">
                    <div class="flex z-10 justify-center items-center pl-1 w-10 text-center pointer-events-none">
                      <i class="text-lg text-gray-400 mdi mdi-lock-outline"></i>
                    </div>
                    <input
                      type="password"
                      class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="px-3 mb-5 w-full">
                  <button
                    to="/login"
                    className="px-6 py-3 mr-1 mb-1 text-sm font-bold text-white uppercase bg-purple-500 rounded shadow transition-all duration-150 ease-linear outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Connexion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
