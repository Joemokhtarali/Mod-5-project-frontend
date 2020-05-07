import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker2 from './bigmapmarker'
import {connect} from 'react-redux'

const array = [{ lat: 40.764357, lng: -73.923462 }, { lat: 40.778790, lng: -73.906588 }, { lat: 40.744309, lng: -73.941860 }]

class BigMap extends React.Component {


  //   React.useEffect(() => {
  //   }, []);

  onMarkerClick = (event) => {
    
  }

  displayMarkers = () => {
    return this.props.activities.map((activity, index) => {
      return <Marker2
        key={activity.id}
        id={index}
        // activity={this.props.activity}
        lat={activity.lat}
        lng={activity.lng}
        color='blue'
        onClick={this.onMarkerClick}
        history={this.props.history}
        activity={activity}
      />
    })
  }

  // mapMarkers = () => {
  //   // debugger
  //   return array.map(marker =>
  //     <Marker
  //       history={props.history}
  //       key={marker.id}
  //       onClick={onClick}
  //       position={{ lat: marker.lat, lng: marker.lng }}
  //     />
  //   )
  // }


  render() {
    
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        {this.props.lat ?
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD4X3Xez83U_L3WZm6Fny8zsSxN_G4s1a4' }}
            defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
            defaultZoom={13}
          >
            {this.displayMarkers()}
            {/* <Marker
              activity = {this.props.activity}
              lat={this.state.lat}
              lng={this.state.lng}
              name={this.props.activity.name}
              color='blue'
              onClick={this.onMarkerClick}
            /> */}

            {/* {this.displayMarkers()} */}
          </GoogleMapReact>
          : null}
      </div>
    );
  }
}

const msp = (state) => {
  return{
    activities: state.activities
  }
}

export default connect(msp)(BigMap);




