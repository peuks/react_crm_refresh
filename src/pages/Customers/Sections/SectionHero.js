import React from "react";
import { herobg } from "../../../assets/img";
import { Button } from "../../../components/ui";

const Section1 = () => {
  return (
    // Image is in an absolute position
    <section className="relative">
      {/* We want image in first position  */}
      <div className="container flex flex-col-reverse gap-12 items-center mt-14 lg:flex-row lg:mt-28">
        {/* Content */}
        {/* flex-1 because there is no flex-basis option in */}
        <div className="flex flex-col flex-1 items-center lg:items-start">
          <h2 className="mb-6 text-3xl text-center text-bookmark-blue md:text-4 lg:text-5xl lg:text-left">
            A Simple Bookmark Manager
          </h2>
          <p className="mb-6 text-lg text-center text-bookmark-grey lg:text-left">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button>Get it on Chrome</Button>
            <Button classSub="secondary">Get it on Firefox</Button>
          </div>
        </div>
        {/* Image */}
        <div className="flex z-10 flex-1 justify-center mb-10 md:mb-16 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={herobg}
            alt=""
          />
        </div>
      </div>
      {/* Rounded Rectangle */}
      <div
        class="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
      ></div>
    </section>
  );
};

export default Section1;
