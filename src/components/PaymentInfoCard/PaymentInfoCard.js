import React from "react";
import { Col } from "react-bootstrap";

import "./PaymentInfoCard.scss";

const PaymentInfoCard = ({ icon, title, description }) => {
  return (
    <Col className="PaymentInfoCard" xs={12} md={4}>
      <div className="icon">
        <div className="icon--bg">
          <div className="icon--border">
            <img src={icon} alt="title" />
          </div>
        </div>
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </Col>
  );
};

export default PaymentInfoCard;
