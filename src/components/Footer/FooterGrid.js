import React from "react";

import { Col } from "react-bootstrap";

const FooterGrid = ({ title, links, children }) => {
  return (
    <Col md={4} lg={4} xl={4} className="mx-auto mt-1 mt-md-3">
      <h5 className="text-capitalize mb-3 mb-md-4 font-weight-bold">{title}</h5>
      {links && (
        <ul className="footer_links">
          {links.map(v => {
            return (
              <li key={v.id}>
                <a href={v.href}>{v.text}</a>
              </li>
            );
          })}
        </ul>
      )}
      {children}
    </Col>
  );
};

export default FooterGrid;
