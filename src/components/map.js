import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js'
// import InfoWindow from 'google-map-react';
// import Marker from 'google-maps-react';
// import {InfoWindow, Marker} from 'google-map-react';


const array = [{ lat: 40.764357, lng: -73.923462}, { lat: 40.778790 , lng: -73.906588}, { lat: 40.744309, lng:  -73.941860}]

class Map extends Component {

  state = {
    lat: null,
    lng: null,
    zoom: 13,
  } 

  componentDidMount() {
    
      .then(resp => resp.json())
      .then(data => this.setState({
        lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng
      }))
  }
  onMarkerClick = (event) => {
    console.log(event.target);
    
  }

  displayMarkers = () => {
    return array.map((place, index) => {
      return <Marker
        activity={this.props.activity}
        lat={place.lat}
        lng={place.lng}
        label={'activity'}
        name={'activity'}
        color='blue'
        // onClick={this.onMarkerClick}
      />
    })
  }

  mapMarkers = () => {
    // debugger
    return array.map(marker =>
      <Marker
        // key={marker.id}
        // onClick={onClick}
        position={{ lat: marker.lat, lng: marker.lng }}
      />
    )
  }
  
  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        {this.state.lat ?
          <GoogleMapReact
            
            defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
            defaultZoom={this.state.zoom}
          >
            {/* {this.mapMarkers()} */}
            <Marker
              activity = {this.props.activity}
              lat={this.state.lat}
              lng={this.state.lng}
              name={this.props.activity.name}
              color='blue'
              onClick={this.onMarkerClick}
            />
            
            {/* {this.displayMarkers()} */}
          </GoogleMapReact>
          : null}

      </div>
    );
  }
}

export default Map;
