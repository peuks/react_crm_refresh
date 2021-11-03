import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";
const Button = ({ to, label, svg, color = true }) => {
  return (
    <ButtonStyled type="button" color={color} to={to}>
      <div class="flex gap-2 items-center">
        {svg && svg}
        {label}
      </div>
    </ButtonStyled>
  );
};

const ButtonStyled = tw(Link)`
${(p) =>
  p.color === "blue" ? "text-white bg-red-500" : "text-white bg-purple-500"}
px-6
py-3
mr-1
mb-1
text-sm
font-bold
uppercase
rounded
shadow
transition-all
duration-150
ease-linear
outline-none
active:bg-purple-600
hover:shadow-lg
focus:outline-none
`;
export default Button;
