import React from "react";

import "./PopularCasesCard.scss";

const PopularCasesCard = ({ title, category, bgImage }) => {
  return (
    <div
      className="PopularCasesCard"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <a href="#">
        <img src={bgImage} alt={title} />
      </a> */}
      <div className="overlay"></div>
      <a className="PopularCasesCard--detail" href="#">
        <small className="PopularCasesCard--detail__category">{category}</small>
        <hr />
        <p className="PopularCasesCard--detail__title">{title}</p>
      </a>
    </div>
  );
};

export default PopularCasesCard;
