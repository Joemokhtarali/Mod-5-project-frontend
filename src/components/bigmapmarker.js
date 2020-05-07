import React from 'react';
import './marker.css';
import { useHistory } from "react-router-dom";



const Marker2 = (props) => {
  const history = useHistory()
  const onClickMarker = (event) => {
    if (props.activity) { history.push(`/activities/${props.activity.id}`) }
  }
  const { color, name, id } = props;

  return (
    <div onClick={onClickMarker}>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={''}
      />


      <div className="pulse" >
        {props.activity ? 
          <h5>{props.activity.name}</h5>
          : <p>No Name</p>}
        </div>
      
    </div>
  )
};

export default Marker2;