import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";
import {
  fade,
  pageAnimation,
  photoAnim,
  titleAnim,
} from "../../animations/index";
const Home2 = () => {
  return (
    <Container>
      {/* // <!-- This example requires Tailwind CSS v2.0+ --> */}
      <motion.div
        animate="show"
        exit="exit"
        initial="hidden"
        variants={fade}
        class="overflow-hidden relative bg-transparent"
      >
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <motion.h1
                variants={fade}
                class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">All your customers </span>

                <span class="block text-indigo-600 xl:inline">
                  in one place
                </span>
              </motion.h1>
              <motion.p
                variants={fade}
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                The best app to find and manage your customers and invoices.
                Send invoices, online paiement and email notification.
              </motion.p>
              <motion.div
                variants={fade}
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <Link
                    to="/login"
                    href="#"
                    class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3"></div>
              </motion.div>
            </div>
          </main>
        </div>
        <motion.div
          variants={photoAnim}
          class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <img
            class="object-cover w-full h-56 sm:h-72 md:h-96 lg:h-full"
            src="http://unsplash.it/640/640?random&gravity=center"
            alt=""
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
const Container = tw(motion.main)`
container
p-5
m-4
mx-auto
my-8
w-full
text-center
bg-white
rounded-xl
border-2
border-gray-300
border-dashed
`;
export default Home2;
