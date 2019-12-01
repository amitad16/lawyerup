import React from "react";

import "./TopRatedLawyerCard.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopRatedLawyerCard = ({
  name,
  image,
  lawyerType,
  rating,
  distance,
  experience,
  languages,
  hourlyRate,
  isOnline,
  bookmarked
}) => {
  return (
    <div className="TopRatedLawyerCard">
      <div className="details">
        <div className="top">
          <div className="lawyer-image">
            <img src={image} alt={name} />
          </div>
          <div className="basic-details">
            <div className="wrap">
              <p className="name">{name}</p>
              <div className="actions">
                {isOnline && (
                  <FontAwesomeIcon
                    icon="circle"
                    color="#2bbd19"
                    className="action"
                  />
                )}
                {bookmarked && (
                  <FontAwesomeIcon
                    icon="bookmark"
                    color="#18a1db"
                    className="action"
                  />
                )}
              </div>
            </div>

            <p className="lawyer-type">{lawyerType}</p>
            <div className="rating">
              <FontAwesomeIcon
                icon="star"
                color="#EAD42B"
                className="rating-star"
              />
              <FontAwesomeIcon
                icon="star"
                color="#EAD42B"
                className="rating-star"
              />
              <FontAwesomeIcon
                icon="star"
                color="#EAD42B"
                className="rating-star"
              />
              <FontAwesomeIcon
                icon="star"
                color="#EAD42B"
                className="rating-star"
              />
              <FontAwesomeIcon
                icon="star"
                color="#EAD42B"
                className="rating-star"
              />
              <span className="rating-text">{rating}</span>
            </div>

            <div className="stack distance">
              <img src="https://img.icons8.com/officel/16/000000/checked-user-male.png" />
              <span>
                <b>{distance} from you</b>
              </span>
            </div>
            <div className="stack experience">
              <img src="https://img.icons8.com/officel/16/000000/checked-user-male.png" />
              <span>{experience} Experience</span>
            </div>
            <div className="stack languages">
              <img src="https://img.icons8.com/officel/16/000000/checked-user-male.png" />
              <span>{languages.join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Button className="btn-icon">
            <FontAwesomeIcon icon="check" />
            &nbsp;&nbsp; I offer Fixed Free services
          </Button>
          <span style={{ color: "#18a1db" }}>or</span>
          <Button className="hourly-rate">
            Hourly Rate <br />
            <b style={{ fontSize: "1.3em" }}>{hourlyRate}</b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedLawyerCard;
