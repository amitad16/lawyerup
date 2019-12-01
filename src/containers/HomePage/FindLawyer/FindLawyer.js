import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FindLawyerForm from "./FindLawyerForm";
import LawyersMap from "./LawyersMap";

const FindLawyer = ({}) => {
  function searchLawyer(data) {
    // Find lawyer with data
  }

  return (
    <div className="FindLawyer">
      <Row>
        {/* <Col md={4}>
          <FindLawyerForm searchLawyer={searchLawyer} />
        </Col>
        <Col md={8}>
          <LawyersMap loaded={true} />
        </Col> */}

        <Col xs={12} md={4} lg={4}>
          <FindLawyerForm searchLawyer={searchLawyer} />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <LawyersMap loaded={true} />
        </Col>
      </Row>
    </div>
  );
};

export default FindLawyer;
