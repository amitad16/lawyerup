import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopRatedLawyerCard from "components/TopRatedLawyerCard";
import { Container, Button, Nav } from "react-bootstrap";

import SectionHeader, { SectionTitle } from "components/SectionHeader";

import constants from "./constants";
import NavTypeFilter from "components/NavTypeFilter/NavTypeFilter";

const TopRatedLawyer = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  const { section_topRatedLawyers } = constants;

  return (
    <section className="TopRatedLawyer">
      <div>
        <SectionHeader>
          <SectionTitle className="title">
            {section_topRatedLawyers.sectionTitle}
          </SectionTitle>
        </SectionHeader>

        <NavTypeFilter />

        <Slider {...settings} className="carousel">
          {section_topRatedLawyers.lawyers.map(v => (
            <TopRatedLawyerCard
              key={v.id}
              name={v.name}
              image={v.image}
              lawyerType={v.lawyerType}
              rating={v.rating}
              distance={v.distance}
              experience={v.experience}
              languages={v.languages}
              hourlyRate={v.hourlyRate}
              isOnline={v.isOnline}
              bookmarked={v.bookmarked}
            />
          ))}
        </Slider>

        <Button className="see-more">See More</Button>
      </div>
    </section>
  );
};

export default TopRatedLawyer;
