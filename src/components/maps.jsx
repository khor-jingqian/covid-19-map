import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA-yspdBNdhlFSvglNSYqYPrxH8w2D8EuI");
Geocode.setLanguage = "en";

class CustomMap extends Component {
  state = {
    data: [],
    markers: [],
  };

  componentDidMount() {
    this.handleAsync();
    this.placeMarkers();
  }

  async handleAsync() {
    let dataEntries = [];
    let mar = [];
    const res = await fetch("/test")
      .then((res) => res.json())
      .then((cus) => {
        dataEntries = cus;
      });

    for (var m = 0; m < dataEntries.length; m++) {
      let entry = dataEntries[m];
      console.log("this is before:  ", entry);

      let newEntry = entry.replace("\t", "").replace("\t", "").split(/\r?\n/);
      console.log("this is after:  ", newEntry);
      for (var i = 0; i < newEntry.length; i++) {
        if (
          newEntry[i].length != 0 &&
          (newEntry[i].charAt(0) > "9" || newEntry[i].charAt(0) < 0)
        ) {
          Geocode.fromAddress(newEntry[i]).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              mar[i] = { lat, lng };
            },
            (error) => {
              console.log(newEntry[i]);
              console.error(error);
            }
          );
        }
      }

      dataEntries[m] = newEntry;
    }
    this.setState({
      data: dataEntries,
      markers: mar,
    });
    console.log("this is data .... ", dataEntries);
  }

  async placeMarkers() {}

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        // style={mapStyles}
        initialCenter={{ lat: 1.307385, lng: 103.768488 }}
      >
        <Marker position={{ lat: 1.286388, lng: 103.839637 }} />
        {this.state.markers.map((mar) => {
          return <Marker position={{ lat: mar[0], lng: mar[1] }} />;
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-yspdBNdhlFSvglNSYqYPrxH8w2D8EuI",
})(CustomMap);
