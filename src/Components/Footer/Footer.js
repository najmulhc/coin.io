import React from "react";
import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";
import FooterTop from "./FooterTop";
import Container from "../Shared/Container";
const Footer = () => {
  return (
    <footer className="bg-neutral">
      <Container className="py-8 md:py-12">
        <FooterTop />
        <FooterNav />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
