import React from "react";
import { Button } from "../../../components/ui";

const ContactUs = () => {
  return (
    <section className="bg-bookmark-purple text-white py-20">
      <div className="container">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto">
          <p className="font-light uppercase text-center mb-8">
            35,000+ ALREADY JOINED
          </p>
          <h1 className="text-3xl text-center">
            Stay up-to-date with what we’re doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your email address"
              className="focus:outline-none flex-1 px-2 py-3 rounded-full text-black"
            />
            <Button type="nav" classSetup="px-6 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
