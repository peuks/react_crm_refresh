import React from "react";

const Button = ({ children = "N/A", type, classSub ,classSetup}) => {
  let variant = "";
  
  switch (classSub) {
    case "secondary":
      variant = "bg-bookmark-white hover:bg-bookmark-purple hover:text-white";
      break;

    default:
      variant =
        "text-white bg-bookmark-purple hover:bg-bookmark-white hover:text-black";
      break;
  }

  switch (type) {
    case "nav":
      type =
        "px-7 py-3 text-white uppercase rounded-full bg-bookmark-red transition duration-300";
      break;
    default:
      type = "px-6 py-3 rounded-full shadow-md transition duration-300";
      break;
  }
  return (
    <button type="button" className={`${type} ${variant} ${classSetup}` }>
      {children}
    </button>
  );
};

export default Button;
