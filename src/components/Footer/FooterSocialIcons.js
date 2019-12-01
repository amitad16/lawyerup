import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSocialIcons = ({}) => {
  return (
    <div className="text-center text-lg-right">
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <a className="btn-floating btn-sm rgba-white-slight mx-1">
            {/* <i className="fab fa-facebook-square"></i> */}
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            {/* <img src="/assets/images/facebook.png" /> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-sm rgba-white-slight mx-1">
            {/* <i className="fab fa-twitter"></i> */}
            <FontAwesomeIcon icon={["fab", "twitter"]} />
            {/* <img src="/assets/images/Twitter.png" /> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-sm rgba-white-slight mx-1">
            {/* <i className="fab fa-instagram"></i> */}
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            {/* <img src="/assets/images/Instagram.png" /> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-sm rgba-white-slight mx-1">
            {/* <i className="fab fa-linkedin"></i> */}
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            {/* <img src="/assets/images/Linkedin.png" /> */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialIcons;
