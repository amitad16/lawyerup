import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

// Components
import NavBar from "./NavBar";

const Header = ({}) => {
  return (
    <header>
      <div className="header">
        <Container>
          <Row className="align-items-center">
            <Col md={3} className="col-6">
              <a href="#" className="logo_wrapper">
                <img src="/assets/images/logo_lawyer.png" />
              </a>
            </Col>
            <Col md={9} className="col-6">
              <NavBar />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
