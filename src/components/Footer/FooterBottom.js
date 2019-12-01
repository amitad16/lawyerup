import React from "react";
import { Row, Col } from "react-bootstrap";

import FooterSocialIcons from "./FooterSocialIcons";

const FooterBottom = () => {
  return (
    <Row className="d-flex align-items-center bottom_footer pt-2 pt-md-4 pb-2 pb-md-4">
      {/* Grid column  */}
      <Col lg={8}>
        {/* Copyright */}
        <p className="text-center text-lg-left">
          LawyerUp is the online trading name of Eclatech Ltd which is
          registered &amp; incorporated in England &amp; Wales. Company
          Registration number 11777022.SIC:74909
        </p>
      </Col>
      {/* Grid column  */}

      {/* Grid column  */}
      <div className="col-lg-4 ml-lg-0">
        <hr className="w-100 clearfix d-md-none" />
        {/* Social buttons  */}
        <FooterSocialIcons />
      </div>
      {/* Grid column  */}
    </Row>
  );
};

export default FooterBottom;
