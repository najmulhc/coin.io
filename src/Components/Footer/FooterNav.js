import React from "react";
import { Link } from "react-router-dom";
import { BsPaypal, BsFillCreditCardFill } from "react-icons/bs";
import { RiMastercardFill } from "react-icons/ri";
import {FaBitcoin} from 'react-icons/fa'
const FooterNav = () => {
  const exchange = [
    "Exchange Home",
    "Margin Tranding",
    "Derivatives Trading",
    "Supercharger",
  ];
  const support = ["Request form", "Contact Support", "FAQ", "Security"];
  const company = [
    "About us",
    "Careers",
    "News",
    "Security",
    "Community",
    "Announcements",
  ];
  const resources = [
    "Downloads",
    "Desktop Application",
    "Buy Crypto",
    "Referral",
    "Listing Tranding",
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 mt-10">
      <div className="mb-6">
        <h1 className="text-md font-semibold text-white mb-10">Exchange</h1>
        {exchange.map((item) => (
          <Link
            to="#"
            className="text-white font-light block opacity-60 text-xs mb-4 text-left "
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="mb-6">
        <h1 className="text-md font-semibold text-white mb-10">Support</h1>
        {support.map((item) => (
          <Link
            to="#"
            className="text-white font-light block opacity-60 text-xs mb-4 text-left "
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="mb-6">
        <h1 className="text-md font-semibold text-white mb-10">Company</h1>
        {company.map((item) => (
          <Link
            to="#"
            className="text-white font-light block opacity-60 text-xs mb-4 text-left " 
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="mb-6">
        <h1 className="text-md font-semibold text-white mb-10">Resources</h1>
        {resources.map((item) => (
          <Link
            to="#"
            className="text-white font-light block opacity-60 text-xs mb-4 text-left "
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="mb-6 col-span-2">
        <h1 className="text-md font-semibold text-white mb-10 ">Newsletter</h1>
        <div className=" flex items-center w-full">
          <input
            type="email"
            placeholder="Enter email"
            className="input input-bordered border-primary w-full"
          />
          <button className="btn btn-primary ml-2 rounded-md capitalize">
            Send
          </button>
        </div>
        <Link
          to="#"
          className="text-white font-light block opacity-60 text-xs mb-4 text-left mt-8"
        >
          We accept following payment systems{" "}
        </Link>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-white bg-base-100 w-full flex justify-center items-center text-xl rounded-md py-4">
            <BsPaypal />
          </div>
          <div className="text-white bg-base-100 w-full flex justify-center items-center text-xl rounded-md py-4">
            <RiMastercardFill />
          </div>
          <div className="text-white bg-base-100 w-full flex justify-center items-center text-xl rounded-md py-4">
            <FaBitcoin />
          </div>
          <div className="text-white bg-base-100 w-full flex justify-center items-center text-xl rounded-md py-4">
            <BsFillCreditCardFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
