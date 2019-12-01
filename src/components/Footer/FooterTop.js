import React from "react";
import { Row } from "react-bootstrap";

import FooterGrid from "./FooterGrid";

const FooterTop = () => {
  return (
    <Row className="text-center text-md-left mt-md-3 pb-4 pb-md-5 top_footer">
      {/* Grid column  */}
      <FooterGrid
        title="Essential Links"
        links={[
          { id: "1", text: "Events", href: "!#" },
          { id: "2", text: "Log In", href: "!#" },
          { id: "3", text: "Contact Us", href: "!#" }
        ]}
      />
      {/* Grid column  */}
      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column  */}
      <FooterGrid
        title="Our Company"
        links={[
          { id: "1", text: "Terms & Conditions", href: "!#" },
          { id: "2", text: "Privacy Policy", href: "!#" },
          { id: "3", text: "Become a featured lawyer", href: "!#" }
        ]}
      />
      {/* Grid column  */}
      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column  */}
      <FooterGrid title="Join Now">
        <div className="footer_form">
          <form>
            <input
              type="email"
              name=""
              placeholder="Enter Your Email"
              className="form-control"
            />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </FooterGrid>
      {/* Grid column  */}
    </Row>
  );
};

export default FooterTop;
