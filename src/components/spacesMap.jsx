import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "85vh",
};

export class SpacesMap extends Component {
  state = {
    spaces: [],
  };

  componentDidMount() {
    const { spaces } = this.props;
    this.setState({ spaces });
  }

  componentDidUpdate(previousProps) {
    const { spaces } = this.props;

    if (previousProps.spaces !== this.props.spaces) {
      this.setState({ spaces });
    }

    const googleMap = this.map;
    const bounds = new window.google.maps.LatLngBounds();

    for (var i = 0; i < spaces.length; i++) {
      const marker = spaces[i].position;
      const myLatLng = new window.google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(myLatLng);
    }

    googleMap.map.fitBounds(bounds);
  }

  render() {
    const { spaces } = this.state;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        maxZoom={14}
        containerStyle={containerStyle}
        ref={(ref) => {
          this.map = ref;
        }}
      >
        {spaces.map((space) => (
          <Marker key={space.position.lat} position={space.position} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDa5TYZD-Zjwkr_XR6t_xJ5BzSzSjM5-YU",
})(SpacesMap);
