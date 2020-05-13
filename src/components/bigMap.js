import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker2 from './bigmapmarker'
import { connect } from 'react-redux'
const API = process.env.REACT_APP_GOOGLE_API_KEY

class BigMap extends React.Component {

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

  render() {

    return (
      <div style={{ height: '100%', width: '100%' }}>
        {this.props.lat ?
          <GoogleMapReact
            bootstrapURLKeys={{ key: API }}
            defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
            defaultZoom={13}
          >
            {this.displayMarkers()}

          </GoogleMapReact>
          : null}
      </div>
    );
  }
}

const msp = (state) => {
  return {
    activities: state.activities
  }
}

export default connect(msp)(BigMap);




