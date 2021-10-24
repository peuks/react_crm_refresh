import React from 'react'
import { logoBookmarkWhite } from '../../../assets/img'

const Footer = () => {
    return (
        <footer class="bg-bookmark-blue py-8">
        <div class="container flex flex-col md:flex-row items-center">
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src={logoBookmarkWhite} alt="" />
            <ul class="flex text-white uppercase gap-12 text-xs">
              <li class="cursor-pointer">Features</li>
              <li class="cursor-pointer">Pricing</li>
              <li class="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div class="flex gap-10 mt-12 md:mt-0 list-none">
            <li><i class="text-white text-2xl fab fa-twitter"></i></li>
            <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
          </div>
        </div>
      </footer>
    )
}

export default Footer
