import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;



class Map extends Component {

  state = {
    lat: null,
    lng: null,
    zoom: 12
  }

  // static defaultProps = {
  //   center: {
  //     lat: 0,
  //     lng: 0
  //   },
  //   zoom: 11
  // };

  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address='${this.props.activity.address}'&key=`)
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
        bootstrapURLKeys={{ key: '' }}

        defaultCenter={{lat:this.state.lat, lng: this.state.lng}}
        defaultZoom={this.state.zoom}
      >
        {this.state.lat ? 
         <AnyReactComponent
         lat={this.state.lat}
         lng={this.state.lng}
         text={this.props.activity.name}
       /> :
       null}
       
      </GoogleMapReact>
      : null} 
        
      </div>
    );
  }
}

export default Map;
