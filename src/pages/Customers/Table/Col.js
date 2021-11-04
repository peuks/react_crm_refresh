import React from "react";

const Col = ({ children }) => {
  return (
    <td class="px-3 py-3 text-left">
      <div class="flex items-center">{children}</div>
    </td>
  );
};

export default Col;
