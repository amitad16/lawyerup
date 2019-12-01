import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Testimonial.scss";

const testimonials = [
  {
    id: "1",
    testimonialText:
      "Working at Google in London - I face many new challenges that haven't been overcome before.. and simplifying them is key. Supporting Lawyerup has been great. I think it is so important to help people choose a lawyer who is experienced in exactly what you need. Of course price, location and client feedback are great too, and all of this is what I think makes Lawyerup brillian",
    userImage: "https://img.icons8.com/officel/80/000000/checked-user-male.png",
    userName: "Emma McNicol",
    userDesignation: "Associal Leagel Counsel",
    companyLogo: "/assets/images/google-for-startups-logo.png"
  },
  {
    id: "2",
    testimonialText:
      "Working at Google in London - I face many new challenges that haven't been overcome before.. and simplifying them is key. Supporting Lawyerup has been great. I think it is so important to help people choose a lawyer who is experienced in exactly what you need. Of course price, location and client feedback are great too, and all of this is what I think makes Lawyerup brillian",
    userImage: "https://img.icons8.com/officel/80/000000/checked-user-male.png",
    userName: "Emma McNicol",
    userDesignation: "Associal Leagel Counsel",
    companyLogo: "/assets/images/google-for-startups-logo.png"
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="Testimonial--wrapper">
      <Slider {...settings} className="carousel">
        {testimonials.map(v => {
          const {
            id,
            testimonialText,
            userImage,
            userName,
            userDesignation,
            companyLogo
          } = v;

          return (
            <div className="Testimonial" key={id}>
              <p className="review">{testimonialText}</p>
              <div className="reviewerInfo">
                <div className="userImage">
                  <img src={userImage} alt={userName} />
                </div>
                <div className="name-designation--wrapper">
                  <p className="userName">{userName}</p>
                  <p className="userDesignation">{userDesignation}</p>
                </div>
                <div className="companyLogo">
                  <img src={companyLogo} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="Testimonial Testimonial--bg-1"></div>
      <div className="Testimonial Testimonial--bg-2"></div>
      <div className="Testimonial Testimonial--bg-3"></div>
    </div>
  );
};

export default Testimonial;
