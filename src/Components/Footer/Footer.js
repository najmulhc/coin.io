import React from "react";
import logo from "../../Assets/Images/logo.svg";
import DownloadFrom from "./DownloadFrom";
import { BsMicrosoft, BsApple } from "react-icons/bs";
import { SiAppstore } from 'react-icons/si'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
const Footer = () => {
  return (
    <footer className="bg-neutral py-8 md:py-12 ">
      <div className="container mx-auto px-8 ">
        <div className="flex justify-between items-center">
          <img src={logo} className="w-32" alt="" />
          <div className="flex justify-between items-center gap-2 md:gap-4">
            <DownloadFrom from="Download PC-Client" platform="Windows">
              <BsMicrosoft></BsMicrosoft>
            </DownloadFrom>
            <DownloadFrom from="Download for" platform="MacOS">
              <BsApple />
            </DownloadFrom>
            <DownloadFrom from="Download from" platform="App Store">
              <SiAppstore />
            </DownloadFrom>
            <DownloadFrom from="Download from" platform="Play Store">
              <IoLogoGooglePlaystore />
            </DownloadFrom>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
