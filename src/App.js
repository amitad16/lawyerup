import React from "react";
import { Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faStar,
  faCircle,
  faBookmark,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

// Utils
import history from "./history";

// Components
import Routing from "containers/Router";

// Css
import "./App.css";
import Footer from "components/Footer";
import Header from "components/Header";

library.add(
  fab,
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faBars,
  faStar,
  faCircle,
  faBookmark,
  faCheck
);

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Routing />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
