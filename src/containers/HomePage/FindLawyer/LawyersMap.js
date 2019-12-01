import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import MapMarker2 from "components/MapMarker/MapMarker2";
// import MapMarker from "components/MapMarker";

class LawyersMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.getMapOptions = this.getMapOptions.bind(this);
  }

  getMapOptions(maps) {
    return {
      fullscreenControlOptions: false,
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }]
        }
      ]
    };
  }

  onMarkerClick = (props, marker) => {
    console.log("props, marker::", props, marker);

    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    return (
      <div className="LawyersMap">
        {/* <Button type="button" className="btn-bordered">
          See Map
        </Button>
  
        <div className="LawyersMap__overlay"></div> */}

        {!this.props.loaded ? (
          <div>Loading...</div>
        ) : (
          <div className="Map--wrapper">
            <Map
              className="map"
              google={this.props.google}
              onClick={this.onMapClicked}
              style={{ height: "100%", position: "relative", width: "100%" }}
              zoom={14}
              {...this.getMapOptions()}
            >
              <Marker
                name="SOMA"
                onClick={this.onMarkerClick}
                position={{ lat: 37.778519, lng: -122.40564 }}
                shape={{ type: "circle", coords: [37.778519, -122.40564, 49] }}
                icon={{
                  url: "/assets/images/emma mcnicol.jpeg",
                  scaledSize: { height: 98, width: 98 },
                  size: { height: 98, width: 98 },
                  origin: { x: 0, y: 0 },
                  anchor: { x: 49, y: 49 },
                  strokeWeight: 2,
                  strokeColor: "green",
                  strokeOpacity: 1,
                  fillColor: "red"
                }}
              />

              <Marker
                name="SOMA"
                onClick={this.onMarkerClick}
                position={{ lat: 37.759703, lng: -122.428093 }}
                shape={{ type: "circle", coords: [37.759703, -122.428093, 49] }}
                icon={{
                  url: "/assets/images/emma mcnicol.jpeg",
                  scaledSize: { height: 98, width: 98 },
                  size: { height: 98, width: 98 },
                  origin: { x: 0, y: 0 },
                  anchor: { x: 49, y: 49 },
                  strokeWeight: 2,
                  strokeColor: "green",
                  strokeOpacity: 1,
                  fillColor: "red"
                }}
              />

              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>

              <InfoWindow
                position={{ lat: 37.765703, lng: -122.42564 }}
                visible
              >
                <small>
                  Click on any of the markers to display an additional info.
                </small>
              </InfoWindow>
            </Map>
          </div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbZY3x6G6DqgrTTHLVKl3Jav_S-tL-P1k"
})(LawyersMap);
