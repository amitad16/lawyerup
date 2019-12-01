import React from "react";
import SectionHeader, {
  SectionTitle,
  SectionSubtitle
} from "components/SectionHeader";

// Constants
import constants from "containers/HomePage/constants";

import { Row, Container, Col } from "react-bootstrap";

const Download = () => {
  let { section_download } = constants;

  return (
    <section className="Download">
      <Container>
        <SectionHeader>
          <SectionTitle className="title">
            {section_download.sectionTitle}
          </SectionTitle>
          <SectionSubtitle className="subtitle">
            {section_download.sectionSubtitle}
          </SectionSubtitle>
        </SectionHeader>
        <Row>
          <Col xs={6} style={{ textAlign: "right" }}>
            <img
              src="/assets/images/download-on-apple.png"
              alt="Download on App Store"
              style={{
                width: "200px"
              }}
            />
          </Col>

          <Col xs={6}>
            <img
              src="/assets/images/download-on-playstore.png"
              alt="Download on Play Store"
              style={{
                width: "232px"
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
