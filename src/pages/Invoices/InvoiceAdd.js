import { Main } from "components/styles/Main";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const InvoiceAdd = () => {
  return (
    <Main>
      <Header>
        <H1>Liste des clients</H1>
      </Header>
      <label for="country">Please select your country</label>
      <input id="country" name="country" required list="country-list" />
      <datalist id="country-list">
        <option value="Italy" />
        <option value="France" />
      </datalist>
    </Main>
  );
};
export default InvoiceAdd;
const H1 = tw.header`pb-8 text-4xl`;
const Header = tw.header`flex justify-between items-start`;
