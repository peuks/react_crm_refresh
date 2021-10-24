import React from "react"; // import { Section1, Section2 } from "./Sections";
import { logoBookmark } from "../../assets/img";
import { Footer } from "../../components/layout";
import { Button, Burger } from "../../components/ui/";
import { SectionHero, Features,Download, Faq, ContactUs } from "./Sections";

const Home = () => {
  return (
    // Header
    <>
      <header>
        <nav className="container flex justify-between items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src={logoBookmark} alt="" />
          </div>
          <ul className="hidden gap-12 items-center text-xs uppercase sm:flex text-bookmark-blue">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <Button type="nav">Login</Button>
          </ul>
          <div className="flex sm:hidden">
            <Burger />
          </div>
        </nav>
      </header>
      <SectionHero />
      <Features />
      <Download />
      <Faq/>
      <ContactUs/>
      <Footer/>

    </>
  );
};
export default Home;
