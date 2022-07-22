import React from "react";

import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
const FooterBottom = () => {
  return (
    <div className="md:flex md:justify-between md:items-center mx:auto mt-8 w-full">
      <div className="md:flex justify-between items-center">
        <Link
          to="#"
          className="text-white font-light block opacity-60 text-xs mb-4 md:text-left text-center min-w-[300px]"
        >
          ©2022 NajmulHC. All rights reserved
        </Link>
        <div className="flex justify-between items-center w-full ">
          <Link
            to="#"
            className="text-white font-light block  text-xs mb-4 text-left md:ml-12"
          >
           <span className="opacity-30">|</span> <span className="md:ml-2 opacity-100">Privacy Policy</span>
          </Link>
          <Link
            to="#"
            className="text-white font-light block text-xs mb-4 text-left md:ml-12"
          >
             <span className="opacity-30">|</span>  <span className="md:ml-2">Terms and Conditions</span>
          </Link>
          <Link
            to="#"
            className="text-white font-light block text-xs mb-4 text-left md:ml-12"
          >
             <span className="opacity-30">|</span>  <span className="md:ml-2">Sitemap</span>
          </Link>
        </div>
      </div>
          <div className="md:block w-full md:w-auto flex justify-center ">
              <h3 className="text-center md:w-full  flex gap-4 text-xl cursor-pointer "><FaFacebookF/> <FaInstagram/> <FaYoutube/> <FaTwitter/> <FaLinkedinIn/></h3>
      </div>
    </div>
  );
};

export default FooterBottom;
