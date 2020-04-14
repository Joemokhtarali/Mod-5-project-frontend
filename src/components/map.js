import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js'

class Map extends Component {

  state = {
    lat: null,
    lng: null,
    zoom: 13,
  }

  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address='${this.props.activity.address}'&key=AIzaSyD4X3Xez83U_L3WZm6Fny8zsSxN_G4s1a4`)
      .then(resp => resp.json())
      .then(data => this.setState({
        lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng
      }))
  }


  render() {

    return (
      <div style={{ height: '30vh', width: '50%' }}>
        {this.state.lat ?
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD4X3Xez83U_L3WZm6Fny8zsSxN_G4s1a4' }}
            defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
            defaultZoom={this.state.zoom}
          >
            <Marker
              lat={this.state.lat}
              lng={this.state.lng}
              name={this.props.activity.name}
              color='blue'
              onClick={this.onMarkerClick}
            />
          </GoogleMapReact>
          : null}

      </div>
    );
  }
}

export default Map;
