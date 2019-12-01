import React, { Component } from "react";
import { Marker } from "google-maps-react";

import "./MapMarker.scss";

class MapMarker2 extends Component {
  constructor(props) {
    super(props);

    console.log("map marker this:::", this);

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    console.log("mapppppp marker:::", this.props);
  }

  handleMarkerClick() {
    this.props.onClick(this.props, this);
  }

  render() {
    let { lawyerId, imageSrc, color, name, onClick } = this.props;

    return (
      <div
        className="MapMarker"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
        onClick={this.handleMarkerClick}
      >
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: "pointer" }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  }
}

export default MapMarker2;
