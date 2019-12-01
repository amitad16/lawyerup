import React, { PureComponent, Fragment } from "react";

import "./HomePage.scss";

// Components
import PaymentsMadeEasy from "./PaymentsMadeEasy";
import Download from "./Download";
import CounterTestimonials from "./CounterTestimonials";
import FindLawyer from "./FindLawyer";
import HowItWorks from "./HowItWorks";
import PopularCases from "./PopularCases";
import TopRatedLawyer from "./TopRatedLawyer";

class HomePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <FindLawyer />
        <TopRatedLawyer />
        <PopularCases />
        <HowItWorks />
        <PaymentsMadeEasy />
        <Download />
        <CounterTestimonials />
      </Fragment>
    );
  }
}

export default HomePage;
