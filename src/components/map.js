import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../config'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '40%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mykey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4X3Xez83U_L3WZm6Fny8zsSxN_G4s1a4&callback=initMap"
    async defer></script> */}