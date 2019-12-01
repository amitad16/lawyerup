import React from "react";
import SectionHeader, {
  SectionTitle,
  SectionSubtitle
} from "components/SectionHeader";

// Constants
import constants from "containers/HomePage/constants";

import { Row, Container, Col } from "react-bootstrap";
import Testimonial from "components/Testimonial";

const CounterTestimonials = () => {
  let { section_counterTestimonials } = constants;

  return (
    <section className="CounterTestimonials">
      <div className="bg"></div>
      <Container>
        <SectionHeader>
          <SectionTitle className="title">
            {section_counterTestimonials.sectionTitle}
          </SectionTitle>
        </SectionHeader>

        <Row className="sponsors">
          <Col xs={4} md={4} lg={4}>
            <img
              src="/assets/images/google-for-startups-logo.png"
              style={{ height: "50px" }}
            />
          </Col>
          <Col xs={4} md={4} lg={4}>
            <img
              src="/assets/images/barclays-logo.png"
              style={{ height: "100px" }}
            />
          </Col>
          <Col xs={4} md={4} lg={4}>
            <img
              src="/assets/images/solicitors-logo.jpg"
              style={{ height: "100px" }}
            />
          </Col>
        </Row>

        {section_counterTestimonials.testimonials.map(v => {
          return (
            <Testimonial
              key={v.id}
              testimonialText={v.testimonialText}
              userImage={v.userImage}
              userName={v.userName}
              userDesignation={v.userDesignation}
              companyLogo={v.companyLogo}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default CounterTestimonials;
