import React from "react";
import SectionHeader, { SectionTitle } from "components/SectionHeader";

import { Row, Container } from "react-bootstrap";

// Constants
import constants from "containers/HomePage/constants";

import PaymentInfoCard from "components/PaymentInfoCard";

const PaymentsMadeEasy = () => {
  let { section_paymentsMadeEasy } = constants;

  return (
    <section className="PaymentsMadeEasy">
      <Container>
        <SectionHeader>
          <SectionTitle className="title">
            {section_paymentsMadeEasy.sectionTitle}
          </SectionTitle>
        </SectionHeader>
        <Row>
          {section_paymentsMadeEasy.infoCards.map(v => (
            <PaymentInfoCard
              key={v.id}
              icon={v.icon}
              title={v.title}
              description={v.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PaymentsMadeEasy;
