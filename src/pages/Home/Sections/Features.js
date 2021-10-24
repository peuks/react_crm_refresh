import React from "react";
import {
  illustrationFeaturesTab1,
  illustrationFeaturesTab2,
  illustrationFeaturesTab3,
} from "../../../assets/img";
import { Button } from "../../../components/ui";

const Features = () => {
  // <!-- Features -->
  return (
    <section class="py-20 mt-20 bg-bookmark-white lg:mt-60">
      <div class="px-2 mx-auto sm:w-3/4 lg:w-5/12">
        <h1 class="text-3xl text-center text-bookmark-blue">Features</h1>
        <p class="mt-4 text-center text-bookmark-grey">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* <!-- Feature #1 --> */}
      <div class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col gap-x-2 justify-center items-center lg:flex-row">
          {/* <!-- Image --> */}
          <div class="flex z-10 flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={illustrationFeaturesTab1}
              alt=""
            />
          </div>
          {/* <!-- Content --> */}
          <div class="flex flex-col flex-1 items lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Bookmark in one click</h1>
            <p class="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <Button>More Info</Button>
          </div>
        </div>
        {/* <!-- Rounded Rectangle --> */}
        <div
          class="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
        ></div>
      </div>
      {/* <!-- Feature #2 --> */}
      <div class="relative mt-20 lg:mt-52">
        <div class="container flex flex-col gap-x-24 justify-center items-center lg:flex-row-reverse">
          {/* <!-- Image --> */}
          <div class="flex z-10 flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={illustrationFeaturesTab2}
              alt=""
            />
          </div>
          {/* <!-- Content --> */}
          <div class="flex flex-col flex-1 items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Intelligent search</h1>
            <p class="my-4 text-center thoext-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to crawl through all of your bookmarks.
            </p>
            <Button>More Info</Button>
          </div>
        </div>
        {/* <!-- Rounded Rectangle --> */}
        <div class="hidden overflow-hidden absolute -bottom-24 -right-36 w-2/4 h-80 rounded-l-full lg:block bg-bookmark-purple"></div>
      </div>
      {/* <!-- Feature #3 --> */}
      <div class="relative mt-20 lg:mt-52">
        <div class="container flex flex-col gap-x-24 justify-center items-center lg:flex-row">
          {/* <!-- Image --> */}
          <div class="flex z-10 flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={illustrationFeaturesTab3}
              alt=""
            />
          </div>
          {/* <!-- Content --> */}
          <div class="flex flex-col flex-1 items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Share your bookmarks</h1>
            <p class="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <Button>More Info</Button>
          </div>
        </div>
        {/* <!-- Rounded Rectangle --> */}
        <div class="hidden overflow-hidden absolute -bottom-24 -left-36 w-2/4 h-80 rounded-r-full lg:block bg-bookmark-purple"></div>
      </div>
    </section>
  );
};

export default Features;
