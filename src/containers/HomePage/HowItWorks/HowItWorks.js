import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import SectionHeader, { SectionTitle } from "components/SectionHeader";

import constants from "containers/HomePage/constants";

const HowItWorks = () => {
  const { section_howItWorks } = constants;

  return (
    <section className="HowItWorks">
      <Container>
        <Row>
          <Col md={7} sm={12} className="left">
            <img src="/assets/images/howitworks.gif" alt="How it Works" />
          </Col>
          <Col md={5} sm={12} className="right">
            <SectionHeader>
              <SectionTitle className="title">
                {section_howItWorks.sectionTitle}
              </SectionTitle>
            </SectionHeader>

            <div className="steps">
              <div className="step">
                <div className="step--image active">
                  <img src="/assets/images/demo-icon.png" />
                </div>
                <div className="step--desc">
                  <h4 className="step--desc__title">Search Lawyers</h4>
                  <p className="step--desc__detail">
                    Any Issue, Any time, Any where
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step--image">
                  <img src="/assets/images/demo-icon.png" />
                </div>
                <div className="step--desc">
                  <h4 className="step--desc__title">Search Lawyers</h4>
                  <p className="step--desc__detail">
                    Any Issue, Any time, Any where
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step--image">
                  <img src="/assets/images/demo-icon.png" />
                </div>
                <div className="step--desc">
                  <h4 className="step--desc__title">Search Lawyers</h4>
                  <p className="step--desc__detail">
                    Any Issue, Any time, Any where
                  </p>
                </div>
              </div>

              <div className="line" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
