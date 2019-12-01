import React from "react";
import { Container } from "react-bootstrap";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-3 pt-md-5">
      <Container className="text-center text-md-left">
        <FooterTop />
        <hr className="m-0" />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
