import React from "react";

const Thead = ({ col }) => {
  return (
    <thead class="bg-gray-50 border-b border-gray-200">
      <tr>
        {col.map((e) => {
          return (
            <th
              scope="col"
              class="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              {e}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Thead;
