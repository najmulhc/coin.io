import React from "react";
import FooterNav from "./FooterNav";
import FooterTop from "./FooterTop";
const Footer = () => {
  return (
    <footer className="bg-neutral py-8 md:py-12 ">
      <div className="container mx-auto md:px-8 px-2"> 
        <FooterTop /> 
        <FooterNav /> 
      </div>
    </footer>
  );
};

export default Footer;
