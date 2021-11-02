import React from "react";

const Label = ({ children, props }) => {
  return (
    <label for="" class="px-1 text-xs font-semibold" {...props}>
      {children}
    </label>
  );
};

export default Label;
