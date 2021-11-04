import React from "react";

const Row = ({ children }) => {
  return (
    <tr class="bg-gray-50 border-b border-gray-200 hover:bg-gray-100">
      {children}
    </tr>
  );
};

export default Row;
