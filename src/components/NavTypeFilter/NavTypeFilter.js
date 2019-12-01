import React from "react";
import { Nav } from "react-bootstrap";

import "./NavTypeFilter.scss";

const NavTypeFilter = ({}) => {
  return (
    <Nav variant="pills" defaultActiveKey="criminal-lawyer">
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer">Family Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="immigration-lawyer">immigration Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer1">Family Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer2">Family Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer3">Family Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer4">Family Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="criminal-lawyer">Criminal Lawyer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="family-lawyer6">Family Lawyer</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavTypeFilter;
