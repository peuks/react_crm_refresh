import React from "react";
import { NavLink } from "react-router-dom";

const LinkNavigation = ({ children, path, logo = false, ...props }) => {
  const linkStyle =
    "my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0";
  const logoStyle =
    "text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300";
  const style = logo ? logoStyle : linkStyle;

  return (
    <NavLink className={style} to={path} {...props}>
      {children}
    </NavLink>
  );
};

export default LinkNavigation;
