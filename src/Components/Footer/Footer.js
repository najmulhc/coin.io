import React from "react";
import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";
import FooterTop from "./FooterTop";
const Footer = () => {
  return (
    <footer className="bg-neutral py-8 md:py-12 ">
      <div className="container mx-auto md:px-8  "> 
        <FooterTop /> 
        <FooterNav /> 
        <hr className="border opacity-20" />
        <FooterBottom /> 
      </div>
    </footer>
  );
};

export default Footer;
