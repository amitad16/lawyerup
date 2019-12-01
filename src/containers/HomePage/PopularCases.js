import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularCasesCard from "components/PopularCasesCard";
import { Container } from "react-bootstrap";

import SectionHeader, {
  SectionTitle,
  SectionSubtitle
} from "components/SectionHeader";

import constants from "./constants";

const PopularCases = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: { centerMode: true, slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const { section_popularCases } = constants;

  return (
    <section className="PopularCases">
      {/* <Container> */}
      <div className="section-header">
        <SectionHeader>
          <SectionTitle className="title">
            {section_popularCases.sectionTitle}
          </SectionTitle>
          <SectionSubtitle>
            {section_popularCases.sectionSubtitle}
          </SectionSubtitle>
        </SectionHeader>
        {/* <h1 className="title">{section_popularCases.sectionTitle}</h1> */}

        {/* <p className="subtitle">{section_popularCases.sectionSubtitle}</p> */}
      </div>

      <Slider {...settings} className="carousel">
        {section_popularCases.carousel.map(v => (
          <PopularCasesCard
            key={v.id}
            title={v.detail.title}
            category={v.detail.category}
            bgImage={v.bgImage}
          />
        ))}
      </Slider>
      {/* </Container> */}
    </section>
  );
};

export default PopularCases;
