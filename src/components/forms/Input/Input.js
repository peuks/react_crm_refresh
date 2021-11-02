import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      class="py-2 pr-3 pl-10 -ml-10 w-full rounded border-2 border-gray-200 outline-none focus:border-indigo-500"
    />
  );
};

export default Input;
