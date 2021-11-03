import { Button } from "components/ui";
import React from "react";
import Plus from "svg/Plus";
import tw from "tailwind-styled-components/dist/tailwind";
const SectionHeader = () => {
  return (
    <Header>
      <H1>Liste des clients</H1>
      <Button to="/customers2" label="New Client" color="red" svg={<Plus />} />
    </Header>
  );
};
const H1 = tw.header`pb-8 text-4xl`;
const Header = tw.header`flex justify-between items-start`;
export default SectionHeader;
