import React from "react";

const ErrorFiled = ({ children }) => {
  return (
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
      {children}
    </div>
  );
};

export default ErrorFiled;
