import React from 'react'
import { logoChrome, logoFirefox, logoOpera } from '../../../assets/img'

import {Button} from "../../../components/ui"
const Download = () => {
    return (
        <section class="py-20 mt-20">
        {/* <!-- Heading --> */}
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-bookmark-blue">Download the extension</h1>
          <p class="text-center text-bookmark-grey mt-4">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
            prioritize.
          </p>
        </div>
        {/* <!-- Cards --> */}
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* <!-- Card 1 --> */}
          <div class="flex flex-col rounded-md shadow-md lg:mb-16">
            <div class="p-6 flex flex-col items-center">
              <img src={logoChrome} alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white" />
            <div class="flex p-6">
              <Button type="button" classSetup="flex-1">
                Add & Install Extension
              </Button>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img src={logoFirefox} alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white" />
            <div class="flex p-6">
              <Button type="button" classSetup="flex-1">
                Add & Install Extension
              </Button>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div class="flex flex-col rounded-md shadow-md lg:mt-16">
            <div class="p-6 flex flex-col items-center">
              <img src={logoOpera} alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white" />
            <div class="flex p-6">
              <Button type="button" classSetup="flex-1">
                Add & Install Extension
              </Button>
            </div>
          </div>
        </div>
      </section>
  
    )
}

export default Download
